//Component
import CardButton from "../components/CardButton/CardButton";
import Logo from "../components/Logo/Logo";

//Card Images
import HiWeatherCard from "../assets/images/Cards/HiWeatherCard.webp"
import PrimeOrNotCard from "../assets/images/Cards/PrimeOrNotCard.webp"
import AstronomyLibraryCard from "../assets/images/Cards/AstronomyLibraryCard.webp"
import Magic8BallCard from "../assets/images/Cards/Magic8BallCard.webp"
import SinceBirthCard from "../assets/images/Cards/SinceBirthCard.webp"
import Quoty from "../assets/images/Cards/QuotyCard.webp"
import DogsFromAllOverTheWorldCard from "../assets/images/Cards/DogsFromAllOverTheWorldCard.webp"
import BoxedCard from "../assets/images/Cards/BoxedCard.webp";
import AboutUsCard from "../assets/images/Cards/AboutUsCard.webp"

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
                    route="/boxed"
                    img = {BoxedCard}
                />
                <CardButton
                    route="/aboutus"
                    img = {AboutUsCard}
                />
            </div>
        </div>
    )
}