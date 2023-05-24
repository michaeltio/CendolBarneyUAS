import {useEffect, useState } from "react";

function PrimeOrNot(){
    const [cusStyles, setCusStyles] = useState({ backgroundColor: "ivory" });
    const[rand, setRand] = useState('');
    const[streak, setStreak] = useState(1)

    useEffect(()=>{
        randomize();
    })

    function randomize(){
        var temp = Math.floor(Math.random() * 4000) + 1000;
        setRand(temp);
    }

    
    
    function clickPrime(){
        var correct = true;
        if(rand==1 || rand==0){
            correct = false
        }else{
            for (let i = 2; i < rand; i++) {
                if (rand % i == 0) {
                    correct = false;
                    break;
                }
            }
        }
        updateStreak(correct);
    }

    function clickNotPrime(){
        var correct = false;
        if(rand==1 || rand==0){
            correct = true;
        }
        else{
            for (let i = 2; i < rand; i++) {
                if (rand % i == 0) {
                    correct = true;
                    break;
                }
            }
        }
        updateStreak(correct);
    }

    function updateStreak(correct){
        if(correct){
            setStreak(prevStreak=>prevStreak + 1);
            setCusStyles({ backgroundColor: "rgba(0, 128, 0, 0.3)" });
        }
        else{
            setStreak(1)
            setCusStyles({ backgroundColor: "rgba(255, 0, 0, 0.3)" });
            randomize();
        }
        

        setTimeout(() => {
        setCusStyles({ backgroundColor: "ivory", transition: "background 1s", });
        }, 10);
    }

    return (
        <div className="" >
            <div style={cusStyles} className="absolute top-0 left-0 w-screen h-screen"/>
            <div className="title absolute top-0 left-1/2 -translate-x-1/2 mt-20 z-30">
                <h1 className="font-bold text-6xl md:text-7xl -translate-x-20 text-green-600">Prime</h1>
                <h1 className="font-bold text-3xl translate-x-1/2">or</h1>
                <h1 className="font-bold text-6xl md:text-7xl translate-x-28 text-red-600">Not?</h1>
            </div>
            <div className="title absolute top-1 left-1/2 -translate-x-1/2 mt-20 -ml-1 opacity-25 blur-sm">
                <h1 className="font-bold text-6xl md:text-7xl -translate-x-20 text-black">Prime</h1>
                <h1 className="font-bold text-3xl translate-x-1/2">or</h1>
                <h1 className="font-bold text-6xl md:text-7xl translate-x-28 text-black">Not?</h1>
            </div>
            <div className="numberDiv absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
                <h3>{rand}</h3>
            </div>
            <div className="decidingDiv flex justify-center translate-y-64 mt-72">
                <button onClick={clickPrime} className="border-none bg-green-500 px-3 rounded-3xl text-white font-bold w-1/4 h-36 lg:text-6xl text-3xl sm:text-4xl md:text-5xl mr-1 md:mr-2">Prime</button>
                <button onClick={clickNotPrime} className="border-none bg-red-500 px-3 rounded-3xl text-white font-bold w-1/4 h-36 lg:text-6xl text-3xl sm:text-4xl md:text-5xl ml-1 md:ml-2">Not</button>
            </div>
            <div className="pointsDiv absolute bottom-0 left-0 text-white font-bold bg-black p-3 rounded-lg m-3 text-md md:text-2xl">
                <h3>Streak: {streak}</h3>
            </div>
        </div>
    )
}

export default PrimeOrNot;