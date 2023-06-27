import { IMG_BASE_URL } from "../../utils/constants";


const Restrocard = ({ item }) => (
  <div className="parentcontainer">
    <div className="imagecontainer">
      <img
        src={`${IMG_BASE_URL}${item?.data?.data?.cloudinaryImageId}`}
        alt="restaurant image"
      />
    </div>
    <div className="textcontainer">
      <h2>{item?.data?.data?.name}</h2>
      <p>{item?.data?.data?.cuisines.toString()}</p>
    </div>
    <div className="cardfooter">
      <div className="ratingdiv">
        <span>⭐</span>
        <span> {item?.data?.data?.avgRating}</span>
      </div>
      <div>.</div>
      <div>{item?.data?.data?.slaString}</div>
      <div>.</div>
      <div>{item?.data?.data?.costForTwoString}</div>
    </div>
  </div>
);

export default Restrocard;
