import React from "react";
import Card from "../Common/Card/Card";
import "./Home.css";
import Graph from "../Common/Graph/Graph";
import UserComment from "../Components/UserComment/UserComment";
import Todo from "../Components/Todo/Todo";

const Home = () => {
  return (
    <>
      <div id="Home-main">
        <div id="card-container">
          <Card title={"Total User"} numbers={100000} />
          <Card
            title={"Avg Question Solved"}
            numbers={"100 Question  Per/Hr"}
          />
          <Card title={"Total Premium User"} numbers={500} />
        </div>
        <div id="statsAndReview">
          <Graph />
          <UserComment />
        </div>
        <Todo />
      </div>
    </>
  );
};

export default Home;
