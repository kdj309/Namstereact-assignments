import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestrodetailShimmerUI from "../UI/RestrodetailShimmerUI";
import RestroHeader from "./RestroHeader";
import { MdTimelapse } from "react-icons/md";
import OfferDiv from "../Menu/OfferDiv";
import ItemsbyCategory from "../Menu/ItemsbyCategory";
import useFetch from "../../hooks/useFetch";

export default function Restrodetail() {
  const { restroid } = useParams();
  const [restrodetails, setrestrodetails] = useState(null);

  const { fetchHandler, loading, error } = useFetch((restrodetail) =>
    setrestrodetails(restrodetail.data)
  );

  function fetchrestrodetail() {
    fetchHandler({
      url: `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9594549&lng=77.5805685&restaurantId=${restroid}&submitAction=ENTER`,
    });

  }
  useEffect(() => {
    fetchrestrodetail();
  }, []);

  if (loading) {
    return <RestrodetailShimmerUI />;
  }

  const title = restrodetails?.cards[0]?.card?.card?.info?.name;
  const styles = restrodetails?.cards[0]?.card?.card?.info?.labels[2]?.message;
  const location = `${restrodetails?.cards[0]?.card?.card?.info?.areaName} ${restrodetails?.cards[0]?.card?.card?.info?.locality} ${restrodetails?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}`;
  const ratings = restrodetails?.cards[0]?.card?.card?.info?.avgRatingString;
  const totalratings =
    restrodetails?.cards[0]?.card?.card?.info?.totalRatingsString;
  const offers =
    restrodetails?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const itemdetailstyle = {
    color: "#3e4152",
    fontSize: "15px",
    fontWeight: "700",
    marginTop: "3px",
  };
  
  return (
    <div className="restrodetailcontainer" data-testid={title}>
      <RestroHeader
        title={title}
        style={styles}
        location={location}
        ratings={ratings}
        totalrating={totalratings}
      />
      <hr className="header-separator" />
      <div className="d-flex gap-3 align-center px-2">
        <h5>
          <MdTimelapse />
        </h5>
        <h5 style={itemdetailstyle}>
          {restrodetails?.cards[0]?.card?.card?.info?.sla?.slaString}
        </h5>
        <h5 style={itemdetailstyle}>
          {restrodetails?.cards[0]?.card?.card?.info?.costForTwoMessage}{" "}
        </h5>
      </div>
      <hr className="header-separator" />
      <div className="d-flex justify-content-evenly flex-wrap">
        {offers?.map((item) => (
          <OfferDiv
            key={item.info.offerIds[0]}
            heading={item?.info?.header}
            code={item.info.couponCode}
            description={item?.info?.description}
            id={item.info.restId}
          />
        ))}
      </div>
      <hr className="header-separator" />
      <ItemsbyCategory
        items={
          restrodetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        }
      />
    </div>
  );
}
