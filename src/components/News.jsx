import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import "./news.css";
import data from "./data.js";
const News = () => {
  return (
    <section className="newsContainer">
      <h1>News Website</h1>

      {data?.map((news, i) => (
        <Card
          key={i}
          img={news["urlToImage"]}
          title={news["title"]}
          desc={news["description"]}
          date={news["publishedAt"]}
          author={news["author"]}
          link={news["url"]}
        />
      ))}
    </section>
  );
};

export default News;
