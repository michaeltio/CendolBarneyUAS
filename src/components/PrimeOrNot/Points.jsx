import { useState } from "react";

function Points(){
    const [points, setPoints] = useState('1')
    const [correct, setCorrect] = useState('true')
    
    function updatePoints(){
        if(correct){
            setPoints(prevPoints=>prevPoints*2);
        }
        else
        {
            if(points>1){
                setPoints(prevPoints=>prevPoints/2);
            }
        }
    }

    return(
        <div>
            <h3>Points: {points}</h3>
            <button onClick={updatePoints}>tes nih bos</button>
        </div>
    )
}

export default Points;