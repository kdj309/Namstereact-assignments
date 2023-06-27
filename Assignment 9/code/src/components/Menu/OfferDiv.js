import React from "react";

export default function OfferDiv({id,heading,description,code}) {
  return (
    <div className="RestaurantOffer_container" aria-hidden="true">
      <div className="RestaurantOffer_infoWrapper">
        <div className="RestaurantOffer_headerWrapper">
          <p className="RestaurantOffer_header">{heading}</p>
        </div>
        <div className="RestaurantOffer_offerCodeWrapper">
          <span>{code}</span>

          <span className="RestaurantOffer_description">| {description||"No Conditions"}</span>
        </div>
      </div>
    </div>
  );
}
