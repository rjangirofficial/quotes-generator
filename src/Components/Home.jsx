import React, { useEffect, useState } from 'react';

const Home = () => {

    const [quote, setQuote] = useState("");

    const fetchQuotes = async () => {
        const resp = await fetch('https://type.fit/api/quotes', {
            method: "GET"
        })
        const randomNumber = Math.floor((Math.random() * 1643) + 1);
        setQuote((await resp.json())[randomNumber])
    }

    useEffect(() => {
        fetchQuotes()
    }, []);

    return (
        <>
            <h1 className='heading'><span>Q</span>uotes <span>G</span>enerator</h1>
            <div className="container">
                <p className='quote'><span>❝</span>{quote.text}<span>❞</span></p>
                <p className='author'>— {quote.author}</p>
                <button onClick={fetchQuotes}>Generate Quotes</button>
            </div>
        </>
    );
}

export default Home;
