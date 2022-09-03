import React from "react";
import Card from "../Card.js"
import data from '../data/wrestlingData';
import Hero from '../Hero';

export default function Wrestling(){
    const cards = data.slice(0).reverse().map(item => {
    return (
        <Card
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            img={require(`../images/${item.coverImg}`)}
            date={item.date}
            author={item.author}
        />
    )
})
    return (
    <div className="Gaming">
      <h1 id="main-heading">Top Stories</h1>
      <Hero key={data[data.length-1].id}
            id={data[data.length-1].id}
            title={data[data.length-1].title}
            category={data[data.length-1].category}
            img={require(`../images/${data[data.length-1].coverImg}`)}
            date={data[data.length-1].date}
            author={data[data.length-1].author}/>
      <div id="cards-list">
        {cards}
      </div>
    </div>
    )
}