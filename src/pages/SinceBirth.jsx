import React, {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from '../components/sincebirth.css'
import { EffectCards } from "swiper";

export default function SinceBirth() {
    const [date, setDate] = useState(null)
    const [cusStyles, setCusStyles] = useState({top: "50%", left:"50%"})
    const [cusStyles2, setCusStyles2] = useState({top: "50%", left: "-50%"})
    const [details, setDetails] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        blinks: 0,
        sleep: 0,
        pee: 0,
        poo: 0,
        yawn: 0,
        steps: 0,
        words: 0,
        remain: 0,
    })

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        console.log(date);

        const currentDate = new Date();
        const selectedDateObj = new Date(selectedDate);
        const timeDifference = currentDate.getTime() - selectedDateObj.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) -1;

        changeDetails(daysDifference)
        console.log(daysDifference)
      };

      function changeDetails(n){
        var sec = n*86400
        var min = n*1440
        var hour = n*24 
        var week = n/7
        var mon = n/12
        var blink = n*16800
        var sleep = n*7
        var pee = n*6
        var poo = n
        var yawn = n*20
        var step = n*3500
        var words = n*7000
        var remain = 26280-n


        setDetails((prevDetails) => ({
            ...prevDetails,
            seconds: sec,
            minutes: min,
            hours: hour,
            days: n,
            weeks: week,
            months: mon,
            blinks: blink,
            sleep: sleep,
            pee: pee,
            poo: poo,
            yawn: yawn,
            steps: step,
            words: words,
            remain: remain
          }));
      }

      function handleClick(){
        setCusStyles({left: "150%", top:"50%", transition: "left 1s ease-in"})
        setCusStyles2({top: "50%", left:"50%", transition: "top 1s ease-out, left 1s ease-out"})
      }

    return (
    <div className="wrapper bg-gradient-to-br from-lime-200 to-lime-400 h-screen overflow-hidden">
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 font-bold text-6xl z-40 mt-8 text-lime-700">Since</h1>
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 font-bold text-6xl z-40 mt-20 text-lime-600">Birth</h1>
        <div className="popupDate absolute -translate-x-1/2 -translate-y-1/2 bg-lime-200 border-none z-40 px-2 pt-3 rounded-xl border-lime-500 w-1/2 md:w-1/3 lg:w-1/4 h-32" style={cusStyles}>
            <h2 className="text-center mb-2">Please enter your birth date.</h2>
            <input type="date" onChange={handleDateChange} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 bg-lime-100 p-2 rounded-lg"></input>
            <button onClick={handleClick}className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 border-2 px-2 rounded-xl border-lime-800 font-bold transition hover:scale-110 hover:text-white hover:bg-lime-500 hover:border-none">Okay</button>
        </div>
        <Swiper
            style={cusStyles2}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper transtition all absolute -translate-x-1/2 -translate-y-1/2"
        >
            <SwiperSlide>You have been alive for {details.seconds} seconds, or {details.minutes} minutes, or {details.hours} hours.</SwiperSlide>
            <SwiperSlide>You have been alive for {details.days} days, or {details.weeks} weeks, or {details.months} months.</SwiperSlide>
            <SwiperSlide>Since birth, you have blinked about {details.blinks} times.</SwiperSlide>
            <SwiperSlide>Since birth, you have slept for about {details.sleep} hours.</SwiperSlide>
            <SwiperSlide>Since birth, you have peed about {details.pee} times.</SwiperSlide>
            <SwiperSlide>Since birth, you have pooped about {details.poo} times.</SwiperSlide>
            <SwiperSlide>Since birth, you have yawned about {details.yawn} times.</SwiperSlide>
            <SwiperSlide>Since birth, you have walked about {details.steps} steps.</SwiperSlide>
            <SwiperSlide>Since birth, you have spoken about {details.words} words.</SwiperSlide>
            <SwiperSlide>The average human life expectancy is 72 years. Which means you have about {details.remain} days left.</SwiperSlide>       
        </Swiper>
        </div>
  );
}
