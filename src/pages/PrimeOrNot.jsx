import DecidingButton from "../components/PrimeOrNot/DecidingButton";
import RandomNumber from "../components/PrimeOrNot/RandomNumber";
import Points from "../components/PrimeOrNot/Points";
import { useState } from "react";

function PrimeOrNot(){
    const[randNum, setRandNum] = useState('');

    return (
        <div>
            <h1>Prime or Not</h1>
            <div className="numberDiv">
                <RandomNumber setRandNum={setRandNum} />
            </div>
            <div className="decidingDiv">
                <DecidingButton randNum={randNum}/> 
            </div>
            <div className="pointsDiv">
                <Points />
            </div>
        </div>
    )
}

export default PrimeOrNot;