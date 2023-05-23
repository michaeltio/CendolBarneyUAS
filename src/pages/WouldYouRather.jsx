import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WouldYouRather() {
    const [data, setData] = useState(null);
    const [question, setQuestion] = useState({
        option1 : "",
        option2 : ""
    });

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://would-you-rather.p.rapidapi.com/wyr/random', {
            headers: {
                'X-RapidAPI-Key': '6badaab6c3msh20cc22f431cd1b3p17f7e6jsn7d73fb0995b7',
                'X-RapidAPI-Host': 'would-you-rather.p.rapidapi.com'
            }
            });
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();

        const processQuestion = () => {
            const option1 = data?.substring(data.indexOf("rather") +7 , data.indexOf("or")-1);
            const option2 = data?.substring(data.indexOf("or") + 3, data.indexOf("?"));
            console.log(option1);
            console.log(option2);
            setQuestion({option1 : option1, option2 : option2})
        }
        processQuestion();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h1>Would You Rather?</h1>
                    <h1>{question.option1}</h1>
                    <h1>{question.option2}</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

