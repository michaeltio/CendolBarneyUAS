import {useEffect, useState } from "react";

function PrimeOrNot(){
    const[rand, setRand] = useState('');
    const[points, setPoints] = useState('0')

    useEffect(()=>{
        randomize();
    })

    function randomize(){
        var temp = Math.floor(Math.random()*50);
        setRand(temp);
    }

    return (
        <div>
            <h1>Prime or Not</h1>
            <div className="numberDiv">
                <h3>{rand}</h3>
            </div>
            <div className="decidingDiv">
                <button>Prime</button>
                <button>Not</button>
            </div>
            <div className="pointsDiv">
                <h3>Points: {points}</h3>
            </div>
        </div>
    )
}

export default PrimeOrNot;