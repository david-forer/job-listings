import React from "react";
import './middle.css'

const Middle = (props) => {
  
  return (
    <div className="middle">
      <div className="middle-top">
        <h4 className="company">{props.item.company}</h4> {props.item.new && <p className="new-tag">New!</p>}
        {props.item.featured && <p className="feature-tag">Featured</p>}
        {props.featured && <div className="feature-highlight"></div>}
      </div>

      <p className="position">{props.item.position}</p>
      <p className="middle-bottom">
        {props.item.postedAt} * {props.item.contract} * {props.item.location}
      </p>
    </div>
  );
};

export default Middle;
