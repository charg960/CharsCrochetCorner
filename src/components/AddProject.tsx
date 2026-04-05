import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AddProject.css";

function AddProject() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    alt: "",
    artist: "",
    difficulty: "1",
    size: "",
    mainImage: null,
    directions: [null]
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFileChange(e, index = null) {
    if (index === null) {
      setFormData({ ...formData, mainImage: e.target.files[0] });
    } else {
      const d = [...formData.directions];
      d[index] = e.target.files[0];
      setFormData({ ...formData, directions: d });
    }
  }

  function removeDirection(index) {
    const updated = formData.directions.filter((_, i) => i !== index);
    setFormData({ ...formData, directions: updated });
  }

  function addDirection() {
    setFormData({ ...formData, directions: [...formData.directions, null] });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("alt", formData.alt);
    data.append("artist", formData.artist);
    data.append("difficulty", formData.difficulty);
    data.append("size", formData.size);

    data.append("mainImage", formData.mainImage);

    formData.directions.forEach((f) => {
      if (f) data.append("directions[]", f);
    });

    try {
      const res = await fetch("http://localhost:8888/PhpFiles/addProject.php", {
        method: "POST",
        body: data
      });

      const text = await res.text();
      console.log("RAW:", text);

      const json = JSON.parse(text);

      if (json.status === "success") {
        alert("Project added!");
        navigate("/collections");
      } else {
        alert(json.message);
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="add-form-wrapper">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Add Project</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input type="file" onChange={(e) => handleFileChange(e)} />
        <input name="alt" placeholder="Alt" onChange={handleChange} />
        <input name="artist" placeholder="Artist" onChange={handleChange}  />

        <select name="difficulty" onChange={handleChange}>
          <option value="1">💛 Beginner</option>
          <option value="2">🧡 Intermediate</option>
          <option value="3">❤️ Advanced</option>
          <option value="4">💜 Expert</option>
        </select>

        <input name="size" placeholder="Size" onChange={handleChange} />

        <h3>Directions</h3>
        {formData.directions.map((_, i) => (
          <div className="direction-input-wrapper" key={i}>
            
            <input 
              type="file" 
              onChange={(e) => handleFileChange(e, i)}
            />

            {/* ❌ button — only show on pages after the first */}
            {i > 0 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeDirection(i)}
              >
                ×
              </button>
            )}
          </div>
        ))}


        <button type="button" className="add-direction-btn" onClick={addDirection}>
          + Add Page
        </button>

        <button type="submit">{loading ? "Adding..." : "Submit"}</button>
      </form>
    </div>
  );
}

export default AddProject;
 