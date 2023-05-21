import styles from './Popup8ball.css'
import { forwardRef, useState, useImperativeHandle} from 'react';


function Popup8ball(props, ref){
    const[answer, setAnswer] = useState("");

    function handleClick(){
        var i = Math.floor(Math.random() * 19);
        setAnswer(pool[i]);
    }

    const pool = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes, definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't Count on it.",
        "My reply is no.",
        "My sources says no.",
        "Outlook not so good.",
        "Very Doubtful."
    ]    

    useImperativeHandle(ref, () => ({
        handleClick: handleClick
      }));

    return ((props.trigger)?
    <div className="popup fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 ">
        <div className="popupContent relative p-10 w-full lg:max-w-xl md:max-w-xl sm:max-w-sm max-w-xs bg-gradient-to-r from-purple-600 to-purple-200 rounded-lg">
            <h3>{answer}</h3>
            <button className="popupClose absolute bottom-2 border-2 px-2 right-0 mr-3 mb-2 rounded-md border-purple-800 hover:scale-110 transition font-bold" onClick={()=> (props.setTrigger)(false)}>Okay</button>
            {props.children}
        </div>
    </div> : ""
    )
}

export default forwardRef(Popup8ball)