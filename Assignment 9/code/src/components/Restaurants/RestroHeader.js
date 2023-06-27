import React from "react";
// import { BiSolidStar } from "react-icons/bi";
// AiFillStar,MdTimelapse

import {AiFillStar} from 'react-icons/ai'
export default function RestroHeader({
  title,
  style,
  location,
  ratings,
  totalrating,
}) {
  return (
    <div className="header-container">
      <div className="header-text">
        <h4>{title}</h4>
        <p>{style}</p>
        <p>{location}</p>
      </div>
      <div className="rating-div">
        <div>
          <p><AiFillStar/>{ratings}</p>
          <p className="totalratings">{totalrating}</p>
        </div>
      </div>
    </div>
  );
}
