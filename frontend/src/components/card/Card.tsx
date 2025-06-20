import React from "react";
import "./Card.css";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card">
      <img src="\favicon.ico" alt="Test image" />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
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
