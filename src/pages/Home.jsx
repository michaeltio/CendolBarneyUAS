import CardButton from "../components/CardButton/CardButton";
import Logo from "../components/Logo/Logo";

export default function Home(){
    return(
        <div>
            <Logo />
            <h3 className="bg-blue-500 text-white p-4 rounded-lg">Hello</h3>
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