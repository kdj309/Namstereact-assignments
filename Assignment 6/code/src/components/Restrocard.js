import { IMG_BASE_URL } from "../utils/constants";


const Restrocard = ({ item }) => (
  <div className="parentcontainer">
    <div className="imagecontainer">
      <img
        src={`${IMG_BASE_URL}${item.data.cloudinaryImageId}`}
        alt="restaurant image"
      />
    </div>
    <div className="textcontainer">
      <h2>{item.data.name}</h2>
      <p>{item.data.cuisines.toString()}</p>
    </div>
    <div className="cardfooter">
      <div className="ratingdiv">
        <span>⭐</span>
        <span> {item.data.avgRating}</span>
      </div>
      <div>.</div>
      <div>{item.data.slaString}</div>
      <div>.</div>
      <div>{item.data.costForTwoString}</div>
    </div>
  </div>
);

export default Restrocard;
