import { useNavigate } from "react-router-dom"

export default function Logo(props){
    const navigate = useNavigate();
    const {height, width, position,left, div} = props;

    const styles = {
        width : width || "100%",
        height : height || "auto",
        position : position || "relative",
        left : left || "0"
    }

   

    return (
        <div className="w-fit m-0 p-0 top-0">
            <button onClick={() => navigate('/')}>
                <img style={styles} src="src\assets\images\LogoBarney.png"></img>
            </button>
        </div>
    )
}   
