import React from "react";
import {HashLink as Link } from 'react-router-hash-link';

export default function Hero(props){
    return (
        <section className="hero">
            <img className="hero-image" src={props.img}/>
            <div id="hero-content">
                <h3 id="hero-category">{props.category}</h3>
                <Link to={props.link} style={{ textDecoration: 'none' }} id="hero-title">{props.title}</Link>
                <div className="hero-author-date">
                    <h4 id="hero-author">{props.author}</h4>
                    <h4 id="hero-date">{props.date}</h4>
                </div>
            </div>
        </section>
    )
}