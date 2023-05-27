import Popup8ball from "../components/Magic8Ball/Popup8ball/Popup8ball";
import { useState } from "react";
import React, { useRef } from 'react';


function Magic8Ball(){
    const [popup, setPopup] = useState(false);
    const popupRef = useRef(null)

    function callHandleClick() {
        setPopup(true);
        if (popupRef.current) {
        popupRef.current.handleClick();
        }
    }

    return <div className="bg-gradient-to-tl from-purple-600 to-blue-200 h-screen w-screen overflow-hidden p-20">
        <div className="absolute left-1/2 -translate-x-1/2 font-bold h-20 w-32">
            <h1 className="absolute left-0 top-0 text-3xl ">Magic</h1>
            <h1 className="absolute top-0 right-0 text-8xl -mr-3 -mt-3">8</h1>
            <h1 className="absolute left-0 bottom-0 text-5xl">Ball</h1>
        </div>
        <div className="content flex items-center justify-center min-h-full z-40">
            <div className="8ballAll z-40">
               <div className="8ballBlack absolute top-1/2 left-1/2 -translate-x-1/2 bg-black w-40 h-40 -mt-36 rounded-full flex justify-center items-center hover:scale-125 hover:rotate-45 hover:-mt-48 hover:ml-10 transition-all">
                    <div className="8ballWhite bg-white w-20 h-20 rounded-full flex justify-center items-center">
                        <h1 className="font-bold text-6xl">8</h1>
                    </div>
                </div> 
            </div>
            
            <div className="grid grid-rows-2 gap-4 z-40 mt-60">
                <input type="text" placeholder="ask me something..." className="h-8 p-3 bg-transparent rounded-lg border-2 border-purple-800  placeholder:text-purple-800 placeholder:brightness-50 focus:border-none" />
                <button onClick={callHandleClick} className="border border-solid border-2 rounded-xl mx-auto px-5 h-12 w-fit border-purple-800 hover:scale-110 transition font-bold text-purple-900">SHAKE</button>
            </div>
        </div>
            <Popup8ball
                ref={popupRef}
                trigger = {popup} 
                setTrigger = {setPopup}
            />
    </div>
}

export default Magic8Ball;