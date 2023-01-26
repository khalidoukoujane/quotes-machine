import React,{useState, useEffect} from 'react';
import './quots.css'

export default function Quots() {
    const [quotes, setQuotes] =useState("")
   function getQuote(){
    fetch("https://type.fit/api/quotes")
    .then(r=>r.json())
    .then(data=>{
        let randomNum = Math.floor(Math.random() * data.length)
        setQuotes(data[randomNum])
    })

    

  }
  useEffect(()=>{
    getQuote()
  },[])

  

  return (
    <div className="quots--container">
        <div className="quotes--box">

        <h2 className="quots--title">
            {quotes.text}
        </h2>
        <p className='quote--author' >-{quotes.author}</p>
        </div>
        <div className="btn--container">

        <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target='_blank' rel='noreferrer' className="quote--tweet">
            Tweet
        </a>
        <button className='quote--btn' onClick={getQuote} >New Quote</button>
        </div>
    </div>
  )
}
