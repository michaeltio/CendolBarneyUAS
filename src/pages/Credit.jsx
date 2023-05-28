import QR from "../assets/images/qr.jpg"
import Tio from "../assets/images/selfi/tio.jpg"
import Russel from "../assets/images/selfi/russel.jpg"

export default function Credit(){
    return(
        <div className="w-3/4 mx-auto">
            <div className="text-center mt-20">
                <h1 className="text-5xl">ABOUT US</h1>
            </div>
            <div className="text-center mt-16">
                <div>
                    <h1 className="text-2xl font-bold">Cendol Barney Team</h1>
                    <div className="flex justify-around flex-wrap">
                        <div className="mt-10">
                            <img src={Tio} alt="" />
                            <h1>Michael Tio / 00000070515</h1>
                        </div>
                        <div className="mt-10">
                            <img src={Russel} alt="" />
                            <h1>Russel Shivah Budiarto / 00000070376</h1>
                        </div>
                        <div className="mt-10">
                            <img src={Tio} alt="" />
                            <h1>Jonathan Adi Purwoko / 00000071230</h1>
                        </div>
                        <div className="mt-10">
                            <img src={Tio} alt="" />
                            <h1>Felix Mario Walewangko / 00000070498</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h1 className="text-2xl font-bold">References</h1>
                    <h1>
                        <a href="https://neal.fun" target="_blank">neal.fun</a>
                    </h1>
                </div>
                <div className="mt-16">
                    <h1 className="text-2xl font-bold">Credit</h1>
                    <h1>APIs:</h1>
                    <h1><a href="https://openweathermap.org">Open Weather</a></h1>
                    <h1><a href="https://api.nasa.gov">Nasa Image and Video Library</a></h1>
                    <h1><a href="https://api-ninjas.com/api/quotes">Quotes API</a></h1>
                    <h1><a href="https://www.thedogapi.com">The Dog API</a></h1>
                </div>
            </div>
            <div className="text-center mt-16">
                <h1>Rate This Website</h1>
                <img draggable="false" className="mx-auto md:w-1/3" src={QR} alt="" />
                <h1><a href="https://me-qr.com/8YONNg6x" target="_blank">Click Me</a></h1>
            </div>
        </div>
    );
}