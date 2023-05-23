import CardButton from "../components/CardButton/CardButton";
import Logo from "../components/Logo/Logo";
import Card from "../assets/images/Cards/HiWeatherCard.png"

export default function Home(){
    return(
        <div>
            <div className="w-fit mx-auto mt-10 mb-10 pl-5 pr-5">
                <Logo />
            </div>
            <div className="cards cards flex flex-wrap justify-center">
                <CardButton
                    route="/hiweather" 
                    img = {Card}
                />
                <CardButton
                    route="/magic8ball" 
                    img = ""
                />  
                <CardButton
                    route="/astronomylibrary"
                    img = "" 
                />
                <CardButton
                    route="/primeornot"
                    img = "" 
                />
                <CardButton
                    route="/quoty"
                    img = "" 
                />
                <CardButton
                    route="/sincebirth"
                    img = "" 
                />
                <CardButton
                    route="/"
                    img = "" 
                />
                <CardButton
                    route="/"
                    img = "" 
                />
                <CardButton
                    route="/"
                    img = "" 
                />
                <CardButton
                    route="/"
                    img = "" 
                />
                <CardButton
                    route="/"
                    img = "" 
                />
            </div>
        </div>
    )
}