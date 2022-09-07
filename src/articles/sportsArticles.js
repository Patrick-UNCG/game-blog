import React from "react";
import data2 from '../data/sportsArticlesData'
import Article from "../component/Article.js";

export default function SportsArticles(){
    const articles = data2.slice(0).reverse().map(item => {
    return (
        <Article
            key={item.id}
            id={item.id}
            mainTitle={item.mainTitle}
            subTitle={item.subTitle}
            category={item.category}
            mainImg={require(`../images/${item.mainImg}`)}
            subImg={require(`../images/${item.subImg}`)}
            subImg2={require(`../images/${item.subImg2}`)}
            author={item.author}
            date={item.date}
            picSubtitle={item.picSubtitle}
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
            paragraph3={item.paragraph3}
            paragraph4={item.paragraph4}
            paragraph5={item.paragraph5}
            link={item.link}
        />
    )
})
    return (
    <div className="sports">
      <div id="article-list">
        {articles}
      </div>
    </div>
    )
}