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
                />
                <CardButton
                    route="/magic8ball" 
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