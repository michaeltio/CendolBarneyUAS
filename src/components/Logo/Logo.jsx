import { useNavigate } from "react-router-dom"
import './Logo.css'

function Logo(){
    const navigate = useNavigate();

    return (
        <div className="logoDiv ">
            <button onClick={()=>navigate('/')}>
                <img className="logoImg" src="src\assets\images\LogoBarney.png"></img>
            </button>
        </div>
    )
}

export default Logo;