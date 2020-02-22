import React from "react";
import NewsItem from "../components/NewsItem";

const Home = () => {
  return (
    <div>
      <h1>Posts</h1>
      <hr />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default Home;
