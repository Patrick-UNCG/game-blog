import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
export default function Card(props){
    return(
        <div className="card-container">
            <img className="card-image" src={props.img} alt="card here"/>
            <h4 id="card-category">{props.category}</h4>
            <Link to={props.link} style={{ textDecoration: 'none' }} id="card-title">{props.title}</Link>
            <div className="author-date">
                <h4 id="card-author">{props.author}</h4>
                <h4 id="card-date">{props.date}</h4>
            </div>
        </div>
    )
    
}