import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/NavBar";
import RestroDiv from "./components/Restaurants";
import Topbar from "./components/Topbar";
import { restrodata } from "./utils/mockData";


const App = () => {
  const [restaurantstorender, setRestaurantsToRender] = useState(restrodata)
  console.log(<Topbar />);
  return (  <>
    <Navbar />
    <Topbar setRestroTorender={setRestaurantsToRender}/>
    <RestroDiv restrotorender={restaurantstorender} />
  </>)

};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
