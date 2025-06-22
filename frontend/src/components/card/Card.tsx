import React from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className="card">
      <img src="\favicon.ico" alt="Test" />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
        <p className="infor">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          accusamus suscipit iure. Eum similique, quos nesciunt repudiandae
          architecto doloremque excepturi incidunt repellat magnam, ipsam,
          dolores magni impedit qui totam dolore.
        </p>
      </div>
    </div>
  );
};

export default Card;
