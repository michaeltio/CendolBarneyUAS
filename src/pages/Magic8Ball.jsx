import Logo from "../components/Logo/Logo"
import Popup8ball from "../components/Popup8ball/Popup8ball";
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

    return <div className="bg-gradient-to-tl from-purple-600 to-blue-200 h-screen w-screen overflow-hidden">
        <Logo />
        <h1 className="title text-center text-4xl text-purple-900 font-bold z-30">Magic 8 Ball</h1>
        <div className="content flex items-center justify-center min-h-full z-40">
            <div className="8ballAll z-40">
               <div className="8ballBlack absolute top-1/2 left-1/2 -translate-x-1/2 bg-black w-40 h-40 -mt-36 rounded-full flex justify-center items-center hover:scale-125 hover:rotate-45 hover:-mt-48 hover:ml-10 transition-all">
                    <div className="8ballWhite bg-white w-20 h-20 rounded-full flex justify-center items-center">
                        <h1 className="font-bold text-6xl">8</h1>
                    </div>
                </div> 
            </div>
            
            <div className="grid grid-rows-2 gap-4 z-40">
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