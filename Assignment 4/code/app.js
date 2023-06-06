import React from "react";
import ReactDOM from "react-dom/client";
import { restrodata } from "./data.mjs";

const Navbar = () => (
  <div className="container">
    <div className="Header">
      <h2>Homley foods</h2>
      <img
        src="https://img.freepik.com/free-vector/lovely-pizza-delivery-man-scooter_23-2147681935.jpg?size=626&ext=jpg"
        alt=""
      />
    </div>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  </div>
);
const RestroDiv = () => <div className="restrocontainer">{
  restrodata.map((restroitem)=><Restrocard key={restroitem.data.id} item={restroitem}/>)
}</div>;

const Restrocard = ({item}) => (
  <div className="parentcontainer">
    <div className="imagecontainer">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.data.cloudinaryImageId}`}
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
        <span>{" "}{item.data.avgRating}</span>
      </div>
      <div>.</div>
      <div>{item.data.slaString}</div>
      <div>.</div>
      <div>{item.data.costForTwoString}</div>
    </div>
  </div>
);
const App=()=>(
  <>
    <Navbar/>
    <RestroDiv/>
  </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
