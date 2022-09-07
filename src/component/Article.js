import React from "react";

export default function Article(props){
    return(
        <div className="article-container" id={props.link}>
            <h4 id="article-category">{props.category}</h4>
            <h1 id="article-title">{props.mainTitle}</h1>
            <div className="article-author-date">
                <p id="article-author">{props.author}</p>
                <p id="article-date">{props.date}</p>
            </div>
            <img id="article-img" src={props.mainImg} alt="first one here"/>
            <h4 id="article-img-subtitle">{props.picSubtitle} </h4>
            <p className="article-paragraph">{props.paragraph1}</p>
            <p className="article-paragraph">{props.paragraph2}</p>
            <h4 id="article-subtitle">{props.subTitle}</h4>
            <img id="article-img" src={props.subImg} alt="second one here"/>
            <p className="article-paragraph">{props.paragraph3}</p>
            <p className="article-paragraph">{props.paragraph4}</p>
            <img id="article-img" src={props.subImg2} alt="third one here"/>
            <p className="article-paragraph">{props.paragraph5}</p>
            {props.id===1?"":<h4>Keep Reading</h4>}
        </div>
    )
}