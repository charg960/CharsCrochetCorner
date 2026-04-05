import "../css/hoverCard.css"

interface Props {
    image: string;
    title: string;
    description: string;
}

function HoverCard({image,title,description}: Props) {
    return (
        <div className="hover-card">
            <img src={image} alt={title} />
            <div className="hover-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HoverCard;