import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/NavBar";
import RestroDiv from "./components/Restaurants";
import Topbar from "./components/Topbar";
import ShimmerCard from "./components/ShimmerCard";
import './style.css'

const App = () => {
  const [restaurantstorender, setRestaurantsToRender] = useState([]);
  const [loading, setloading] = useState(false)
  const shimmerdiv=[1,2,3,4,5,6,7,8];
  const fetchData=async function () {
    setloading(true)
    const res=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9594549&lng=77.5805685&page_type=DESKTOP_WEB_LISTING');
    const data=await res.json();
    setloading(false)
    setRestaurantsToRender(data?.data?.cards[2]?.data?.data?.cards)

  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (  <>
    <Navbar />
    <Topbar setRestroTorender={setRestaurantsToRender}/>
  
   {loading?<div className="restrocontainer">{shimmerdiv.map((item,index)=><ShimmerCard key={index}/>)}</div>:<RestroDiv restrotorender={restaurantstorender} />}
  </>)

};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
