import React from "react";

export default function Hero(props){
    return (
        <section className="hero">
            <img className="hero-image" src={props.img}/>
            <div id="hero-content">
                <h3 id="hero-category">{props.category}</h3>
                <h1 id="hero-title">{props.title}</h1>
                <div className="hero-author-date">
                    <h4 id="hero-author">{props.author}</h4>
                    <h4 id="hero-date">{props.date}</h4>
                </div>
            </div>
        </section>
    )
}