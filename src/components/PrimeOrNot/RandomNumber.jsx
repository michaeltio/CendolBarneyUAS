import {useEffect, useState} from "react";

function RandomNumber({setRandNum}) {
    const [rand, setRand] = useState("0");

    
    useEffect(() => {
        randomize();
        sendRand(rand);
    })
    
    function sendRand(rand){
        setRandNum(rand);
    }

    function randomize(){
        var temp = Math.floor(Math.random()*50);
        setRand(temp);
    }

    
    return (
        <div>
            <h2>{rand}</h2>
            <button onClick={randomize}>randomize</button>
        </div>
    )
}


export default RandomNumber;

