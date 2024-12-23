import { IMG_BASE_URL } from "../../utils/constants";


const Restrocard = ({ item }) => (
  <div className="parentcontainer">
    <div className="imagecontainer">
      <img
        src={`${IMG_BASE_URL}${item?.cloudinaryImageId}`}
        alt="restaurant image"
      />
    </div>
    <div className="textcontainer">
      <h2>{item?.name}</h2>
      <p>{item?.cuisines.toString()}</p>
    </div>
    <div className="cardfooter">
      <div className="ratingdiv">
        <span>⭐</span>
        <span> {item?.avgRating}</span>
      </div>
      <div>.</div>
      <div>{item?.slaString}</div>
      <div>.</div>
      <div>{item?.costForTwoString}</div>
    </div>
  </div>
);

export default Restrocard;
