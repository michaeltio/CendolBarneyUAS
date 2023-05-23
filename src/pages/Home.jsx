import CardButton from "../components/CardButton/CardButton";
import Logo from "../components/Logo/Logo";

export default function Home(){
    return(
        <div>
            <div className="w-fit mx-auto mt-10 mb-10 pl-5 pr-5">
                <Logo height="50px" width="50px" />
            </div>
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
                <CardButton
                    route="/"
                    img = "" 
                />
            </div>
        </div>
    )
}