import React from "react";
import Card from "../Card.js"
import data from '../data/gamingData';
import Hero from '../Hero';

export default function Gaming(){
    const cards = data.slice(data.length - 4).reverse().map(item => {
    return (
        <Card
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            img={require(`../images/${item.coverImg}`)}
            date={item.date}
            author={item.author}
            link={item.link}
        />
    )
})
    return (
    <div className="Gaming">
      <h1 id="main-heading"><i className="fa-solid fa-square fa-2xs"></i> Top Stories</h1>
      <Hero key={data[data.length-1].id}
            id={data[data.length-1].id}
            title={data[data.length-1].title}
            category={data[data.length-1].category}
            img={require(`../images/${data[data.length-1].coverImg}`)}
            date={data[data.length-1].date}
            author={data[data.length-1].author}
            link={data[data.length-1].link}/>
      <div id="cards-list">
        {cards}
      </div>
    </div>
    )
}