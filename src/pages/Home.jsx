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
                    name = "2. magic 8 ball"
                />  
                <CardButton
                    route="/astronomylibrary"
                    img = "" 
                    name = "3. since birth"
                />
                <CardButton
                    route="/primeornot"
                    img = "" 
                    name = "4. "
                />
                <CardButton
                    route="/"
                    img = ""
                    name = "5. " 
                />
                <CardButton
                    route="/quoty"
                    img = "" 
                />
                <CardButton
                    route="/sincebirth"
                    img = "" 
                    name = "6. "
                />
                <CardButton
                    route="/"
                    img = ""
                    name = "7. " 
                />
                <CardButton
                    route="/"
                    img = "" 
                    name = "8. "
                />
                <CardButton
                    route="/"
                    img = "" 
                    name = "9. "
                />
                <CardButton
                    route="/"
                    img = "" 
                    name = "10. "
                />
            </div>
        </div>
    )
}