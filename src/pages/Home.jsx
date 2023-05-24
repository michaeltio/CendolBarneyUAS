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
                    route="/primeornot"
                    img = "" 
                    name = "2. Prime Or Not"
                />
                <CardButton
                    route="/astronomylibrary"
                    img = "" 
                    name = "3. Astronomy Library"
                />
                <CardButton
                    route="/magic8ball" 
                    img = ""
                    name = "4. magic 8 ball"
                />  
                <CardButton
                   route="/sincebirth"
                   img = "" 
                    name = "5. Since Birth" 
                />
                <CardButton
                    route="/quoty"
                    img = "" 
                    name = "6. Quoty"
                />
                <CardButton
                    route="/wouldyourather"
                    img = ""
                    name = "7. Would You Rather" 
                />
                <CardButton
                    route="/dogsfromallovertheworld"
                    img = "" 
                    name = "8. Dogs From All Over The World"
                />
                <CardButton
                    route="/"
                    img = "" 
                    name = "9. (Belum Ada Game)"
                />
                <CardButton
                    route="/"
                    img = "" 
                    name = "10. (Belum Ada Game)"
                />
                <CardButton
                    route="/Credit"
                    img = "" 
                    name = "11. Credit"
                />
            </div>
        </div>
    )
}