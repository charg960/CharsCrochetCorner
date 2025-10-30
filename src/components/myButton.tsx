import './myButton.css'

interface Props {
    btn : string;
}

function MyButton({btn}: Props) {
    return (
        <div >
            <button className= "mybutton">{btn}</button>
        </div>
    );
}

export default MyButton;
