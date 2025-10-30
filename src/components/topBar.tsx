import './topBar.css'

interface Props {
    btn1 : string;
    btn2 : string;
    btn3 : string;
    btn4: string;
}

function TopBar({btn1, btn2, btn3, btn4}: Props) {
    return (
        <div className= "top-bar">
            <button>{btn1}</button>
            <button>{btn2}</button>
            <button>{btn3}</button>
            <button>{btn4}</button>
        </div>
    );
}

export default TopBar;
