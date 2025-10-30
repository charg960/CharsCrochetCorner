import "./imageCard.css"
import {useState} from "react";

//import { useState } from "react";

interface Props {
    text: string;
    picture: string;
    //onSelectItem: (item: string) => void;
}

function ImageCard({text, picture}: Props) {
    function showInfo(){
        setNumClicks(numClicks + 1)
        //alert(text)
        alert("You clicked the picture " + numClicks + "times.")
    }

    const [numClicks, setNumClicks] = useState(1);

    return(
        <>
            <div>
                <img
                    className = "image-card" src = {picture} alt = {text}
                    onClick = {showInfo}
                />
            </div>
        </>
    );
}

export default ImageCard;
