import React, { useEffect, useState, useRef, useCallback } from "react";
import RestroDiv from "./components/Restaurants/Restaurants";
import Topbar from "./components/Topbar";
import ShimmerCard from "./components/UI/ShimmerCard";
import {getNextOffset} from './services/getNextOffset'
import "./style.css";

const OFFSET_LIMIT = 207;

const App = () => {
  const [isSearch, setisSearch] = useState(false);
  const [restaurantstorender, setRestaurantsToRender] = useState([]);
  const [loading, setloading] = useState(false);
  const [shimmerdivs, setshimmerdivs] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [allrestros, setallrestros] = useState([]);
  const [initialOffeset, setInitialOffeset] = useState("")
  const [csrF, setCsrF] = useState("")
  // const shimmerdiv = [1, 2, 3, 4, 5, 6, 7, 8];
  const [offset, setOffset] = useState(1);
  // const [lastElement, setLastElement] = useState(null);
  const observer = useRef();
  const lastelementref = useCallback(
    (node) => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        const last = entries[0];
        if (last.isIntersecting && offset < OFFSET_LIMIT) {
          // (async()=>{
          //   try {
          //     setloading(true);
          //     setshimmerdivs((prev) => [...prev, ...new Array(4)]);
          //     const restaurants=await getNextOffset(csrF,initialOffeset,'21.99740','79.00110')
          //     setloading(false);
          //     setRestaurantsToRender([...restaurants]);
          //     setallrestros((pre) => [...pre, ...restaurants]);
          //   } catch (error) {
          //     console.log(error);
          //   }
          // })()
        }
      },{threshold:1.0});
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading]
  );

  const fetchData = async function () {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9594549&lng=77.5805685&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
    setloading(true);
    const res = await fetch(url);
    const data = await res.json();
    setCsrF(data.csrfToken)
    let allrestros = [...new Set([...restaurantstorender, ...data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map((v)=>v.info)])];
    setloading(false);
    setInitialOffeset(data.data.pageOffset.nextOffset)
    setRestaurantsToRender([...allrestros]);
    setallrestros((pre) => [...pre, ...allrestros]);
  };

  useEffect(()=>{
    fetchData()
  },[])
  


  return (
    <>
      <Topbar
        setisSearch={setisSearch}
        allrestro={allrestros}
        setRestroTorender={setRestaurantsToRender}
      />
      <RestroDiv
        lastref={lastelementref}
        restrotorender={restaurantstorender}
      />

      {loading && (
        <div className="restrocontainer">
          {shimmerdivs.map((item,idx) => (
            <ShimmerCard key={idx} />
          ))}
        </div>
      )}
    </>
  );
};
export default App;
