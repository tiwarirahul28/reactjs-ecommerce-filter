import React from "react";
import { BsBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              Rs:<del> {prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
