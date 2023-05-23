import { useNavigate } from "react-router-dom"

export default function Logo(props){
    const navigate = useNavigate();
    const {height, width} = props;
    console.log(props.width);

    const styles = {
        width : width || "100%",
        height : height || "auto"
    }

    return (
        <div>
            <button onClick={() => navigate('/')}>
                <img style={styles} src="src\assets\images\LogoBarney.png"></img>
            </button>
        </div>
    )
}   
