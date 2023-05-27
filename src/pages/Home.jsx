//Component
import CardButton from "../components/CardButton/CardButton";
import Logo from "../components/Logo/Logo";

//Card Images
import HiWeatherCard from "../assets/images/Cards/HiWeatherCard.png"
import PrimeOrNotCard from "../assets/images/Cards/PrimeOrNotCard.png"
import AstronomyLibraryCard from "../assets/images/Cards/AstronomyLibraryCard.png"
import Magic8BallCard from "../assets/images/Cards/Magic8BallCard.png"
import SinceBirthCard from "../assets/images/Cards/SinceBirthCard.png"
import Quoty from "../assets/images/Cards/QuotyCard.png"
import DogsFromAllOverTheWorldCard from "../assets/images/Cards/DogsFromAllOverTheWorldCard.png"
import AboutUsCard from "../assets/images/Cards/AboutUsCard.png"

export default function Home(){
    return(
        <div>
            <div className="w-fit mx-auto mt-10 mb-10 pl-5 pr-5">
                <Logo />
            </div>
            <div className="cards cards flex flex-wrap justify-center">
                <CardButton
                    route="/hiweather" 
                    img = {HiWeatherCard}
                />
                <CardButton
                    route="/primeornot"
                    img = {PrimeOrNotCard} 
                />
                <CardButton
                    route="/astronomylibrary"
                    img = {AstronomyLibraryCard}
                />
                <CardButton
                    route="/magic8ball" 
                    img = {Magic8BallCard}
                />  
                <CardButton
                   route="/sincebirth"
                   img = {SinceBirthCard} 
                />
                <CardButton
                    route="/quoty"
                    img = {Quoty}
                />
                <CardButton
                    route="/dogsfromallovertheworld"
                    img = {DogsFromAllOverTheWorldCard}
                />
                <CardButton
                    route="/aboutus"
                    img = {AboutUsCard}
                />
            </div>
        </div>
    )
}