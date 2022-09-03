import React from "react";

export default function Card(props){
    return(
        <div className="card-container">
            <img className="card-image" src={props.img}/>
            <h4 id="card-category">{props.category}</h4>
            <h2 id="card-title">{props.title}</h2>
            <div className="author-date">
                <h4 id="card-author">{props.author}</h4>
                <h4 id="card-date">{props.date}</h4>
            </div>
        </div>
    )
    
}