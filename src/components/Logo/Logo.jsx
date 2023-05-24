import { useNavigate } from "react-router-dom"

export default function Logo(props){
    const navigate = useNavigate();
    const {height, width, position, top, left} = props;

    const imgStyles = {
        width : width || "100%",
        height : height || "auto",
    }

    const divStyles = {
        position : position || "relative",
        top : top || "0px",
        left : left || "0px"
    }


    return (
        <div style={divStyles} className="w-fit m-0 p-0 top-0">
            <button onClick={() => navigate('/')}>
                <img style={imgStyles} src="src\assets\images\LogoBarney.png"></img>
            </button>
        </div>
    )
}   
