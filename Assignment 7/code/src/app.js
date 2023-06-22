import React, { useEffect, useState, useRef, useCallback } from "react";
import RestroDiv from "./components/Restaurants/Restaurants";
import Topbar from "./components/Topbar";
import ShimmerCard from "./components/UI/ShimmerCard";
import "./style.css";

const OFFSET_LIMIT = 207;

const App = () => {
  const [isSearch, setisSearch] = useState(false);
  const [restaurantstorender, setRestaurantsToRender] = useState([]);
  const [loading, setloading] = useState(false);
  const [shimmerdivs, setshimmerdivs] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [allrestros, setallrestros] = useState([]);
  // const shimmerdiv = [1, 2, 3, 4, 5, 6, 7, 8];
  const [offset, setOffset] = useState(15);
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
          setOffset((no) => no + 16);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading]
  );

  const fetchData = async function () {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9594549&lng=77.5805685&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
    const initialurl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9594549&lng=77.5805685&page_type=DESKTOP_WEB_LISTING`;
    setloading(true);
    const res = await fetch(url);
    const data = await res.json();
    let allrestros = new Set([...restaurantstorender, ...data?.data?.cards]);
    setloading(false);
    // setRestaurantsToRender(data?.data?.cards[2]?.data?.data?.cards)
    setRestaurantsToRender([...allrestros]);
    setallrestros((pre) => [...pre, ...allrestros]);
  };
  useEffect(() => {
    if (offset <= OFFSET_LIMIT) {
      setshimmerdivs((prev) => [...prev, ...new Array(4)]);
      fetchData();
    }
  }, [offset]);


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
          {shimmerdivs.map((item, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      )}
    </>
  );
};
export default App;
