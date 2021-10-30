import React from "react";
import "./card.css";
import Avatar from './Avatar'
import Middle from './Middle'
import Languages from './Languages'

const Card = ({ item }) => {
  
  return (
    <>
      <div className="card-grid">
        <div className="card-grid__list-item">
          <div className="image-section">
            <Avatar x={item.logo} />
          </div>
          <div className="middle-section">
            <Middle item={item} />
          </div>
          <div className="filter-section">
           <Languages item={item}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
