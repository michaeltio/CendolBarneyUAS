import { useNavigate } from "react-router-dom";
import './CardButton.css'

function CardButton(props){
    const navigate = useNavigate();

    return <div className="card m-3">
        <button className="cardButton" onClick={()=>navigate(props.route)}>
            <div className="imageWrapper">
                <img className="buttonImage" src={props.img} />
            </div>
        </button>
    </div>
}

export default CardButton;