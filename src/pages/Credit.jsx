import { useState } from "react"
import QR from "../assets/images/qr.webp"
import TioFormal from "../assets/images/selfi/tioformal.webp"
import RusselFormal from "../assets/images/selfi/russelformal.webp"
import JapFormal from "../assets/images/selfi/japformal.webp"
import FelixFormal from "../assets/images/selfi/felixformal.webp"
import Tio from "../assets/images/selfi/tio.webp"
import Russel from "../assets/images/selfi/russel.webp"
import Jap from "../assets/images/selfi/jap.webp"
import Felix from "../assets/images/selfi/felix.webp"


export default function Credit(){
    const[tioHovered, setTioHovered] = useState(false); 
    const[russelHovered, setRusselHovered] = useState(false); 
    const[japHovered, setJapHovered] = useState(false); 
    const[felixHovered, setFelixHovered] = useState(false); 

    const handleTio = () => {
        setTioHovered(!tioHovered);
      };
    
    const handleRussel = () => {
        setRusselHovered(!russelHovered);
      };
    
    const handleJap = () => {
        setJapHovered(!japHovered);
      };
    
    const handleFelix = () => {
        setFelixHovered(!felixHovered);
      };
    
   

    return(
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-amber-200 to-amber-200 text-amber-800 md:p-10">

            <div className="w-3/4 md:w-full p-0 md:px-10 mx-auto sm:border-4 sm:border-amber-900 md:shadow-xl">
                <div className="text-center mt-20">
                    <h1 className="text-5xl font-bold">ABOUT US</h1>
                </div>
                <div className="text-center mt-12">
                    <div>
                        <h1 className="text-3xl font-bold">Cendol Barney Team</h1>
                        <div className="flex justify-around flex-wrap -mt-2">
                            <div className="mt-10 drop-shadow-md" onMouseEnter={handleTio} onMouseLeave={handleTio}>
                                <img className="rounded-lg" src={tioHovered? Tio : TioFormal} alt="" />
                                <div className="mt-2 bg-gradient-to-t from-amber-300 viaf-amber-500 to-amber-200 rounded-xl p-2 border-4 border-amber-300 transition hover:scale-110">
                                    <h1 className="font-bold text-amber-900 text-xl">Michael Tio</h1>
                                    <h1>00000070515</h1>
                                    <h1 className="underline"><a href="https://www.instagram.com/michael.tioo">@michael.tioo</a></h1>
                                </div>
                            </div>
                            <div className="mt-10 drop-shadow-md" onMouseEnter={handleRussel} onMouseLeave={handleRussel}>
                                <img className="rounded-lg" src={russelHovered? Russel : RusselFormal} alt="" />
                                <div className="mt-2 bg-gradient-to-t from-amber-300 viaf-amber-500 to-amber-200 rounded-xl p-2 border-4 border-amber-300 transition hover:scale-110">
                                    <h1 className="font-bold text-amber-900 text-xl">Russel Shivah Budiarto</h1>
                                    <h1>00000070376</h1>
                                    <h1 className="underline"><a href="https://www.instagram.com/sshivahh">@sshivahh</a></h1>
                                </div>                            
                            </div>
                            <div className="mt-10 drop-shadow-md" onMouseEnter={handleJap} onMouseLeave={handleJap}>
                                <img className="rounded-lg" src={japHovered? Jap : JapFormal} alt="" />
                                <div className="mt-2 bg-gradient-to-t from-amber-300 viaf-amber-500 to-amber-200 rounded-xl p-2 border-4 border-amber-300 transition hover:scale-110">
                                    <h1 className="font-bold text-amber-900 text-xl">Jonathan Adi Purwoko</h1>
                                    <h1>00000071230</h1>
                                    <h1 className="underline"><a href="https://www.instagram.com/jonathan.jap">@jonathan.jap</a></h1>
                                </div> 
                            </div>
                            <div className="mt-10 drop-shadow-md" onMouseEnter={handleFelix} onMouseLeave={handleFelix}>
                                <img className="rounded-lg" src={felixHovered? Felix : FelixFormal} alt="" />
                                <div className="mt-2 bg-gradient-to-t from-amber-300 viaf-amber-500 to-amber-200 rounded-xl p-2 border-4 border-amber-300 transition hover:scale-110">
                                    <h1 className="font-bold text-amber-900 text-xl">Felix Mario Walewangko</h1>
                                    <h1>00000070498</h1>
                                    <h1 className="underline"><a href="https://instagram.com/fel.mw">@fel.mw</a></h1>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h1 className="text-2xl font-bold">References</h1>
                        <h1 className="underline">
                            <a href="https://neal.fun" target="_blank">neal.fun</a>
                        </h1>
                    </div>
                    <div className="mt-16">
                        <h1 className="text-2xl font-bold">Credit</h1>
                        <h1>APIs:</h1>
                        <h1 className="underline"><a href="https://openweathermap.org">Open Weather</a></h1>
                        <h1 className="underline"><a href="https://api.nasa.gov">Nasa Image and Video Library</a></h1>
                        <h1 className="underline"><a href="https://api-ninjas.com/api/quotes">Quotes API</a></h1>
                        <h1 className="underline"><a href="https://www.thedogapi.com">The Dog API</a></h1>
                    </div>
                </div>
                <div className="text-center mt-16">
                    <h1 mt-5>Rate This Website</h1>
                    <img draggable="false" className="mx-auto mt-5 md:w-1/3 drop-shadow-md" src={QR} alt="" />
                    <h1 className="mt-5 mb-5 underline font-bold"><a href="https://me-qr.com/8YONNg6x" target="_blank">Click Me</a></h1>
                </div>
            </div>
        </div>
    );
}