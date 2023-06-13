import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="left">
          <img src={props.img} alt="" />
        </div>
        <div className="right">
          <a className="title" href={props.link}>
            {props.title}
          </a>
          <span className="desc">{props.desc}</span>
          <div className="otherInfo">
            <div className="date">
              {props.date} | {props.author}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card;
