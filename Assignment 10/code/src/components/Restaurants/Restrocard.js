import { IMG_BASE_URL } from "../../utils/constants";


const Restrocard = ({ item }) => {
//  console.log(item)
return (
  <div className="parentcontainer">
    <div className="imagecontainer">
      <img
        src={`${IMG_BASE_URL}${item?. info?.cloudinaryImageId}`}
        alt="restaurant image"
      />
    </div>
    <div className="textcontainer">
      <h2>{item?.info.name}</h2>
      <p>{item?.info.cuisines.toString()}</p>
    </div>
    <div className="cardfooter">
      <div className="ratingdiv">
        <span>⭐</span>
        <span> {item?.info?.avgRatingString}</span>
      </div>
      <div>.</div>
      <div>{item?.info?.sla?.slaString}</div>
      <div>.</div>
      <div>{item?.info?.costForTwoString}</div>
    </div>
  </div>
)
};

export default Restrocard;
