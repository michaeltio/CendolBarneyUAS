import CardButton from "../components/CardButton/CardButton";
import Logo from "../components/Logo/Logo";

export default function Home(){
    return(
        <div>
            <Logo />
            <div className="cards cards flex flex-wrap justify-center">
                <CardButton
                    route="/hiweather" 
                    img = ""
                    name = "1. hiweather"
                />
                <CardButton
                    route="/magic8ball" 
                    img = ""
                    name = "2. magic 8 ball"
                />  
                <CardButton
                    route="/"
                    img = "" 
                    name = "3. since birth"
                />
                <CardButton
                    route="/"
                    img = "" 
                    name = "4. "
                />
                <CardButton
                    route="/"
                    img = ""
                    name = "5. " 
                />
                <CardButton
                    route="/"
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