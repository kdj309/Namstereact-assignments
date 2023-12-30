import React, { useEffect, useState, useRef, useCallback } from "react";
import RestroDiv from "./components/Restaurants/Restaurants";
import Topbar from "./components/UI/Topbar";
import ShimmerCard from "./components/UI/ShimmerCard";
import "./style.css";
import useFetch from "./hooks/useFetch";
import useInternet from "./hooks/useInternet";

const OFFSET_LIMIT = 207;

const App = () => {
  const [restaurantstorender, setRestaurantsToRender] = useState([]);
  const [shimmerdivs, setshimmerdivs] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [allrestros, setallrestros] = useState([]);
  const [offset, setOffset] = useState(15);
  const [search, setsearch] = useState(false)
  const { fetchHandler, loading, error } = useFetch((allrestrosdata) => {
    let allrestros = new Set([
      ...restaurantstorender,
      ...allrestrosdata.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    ]);
    setRestaurantsToRender([...allrestros]);
    setallrestros((pre) => [...pre, ...allrestros]);
  });
  const observer = useRef();
  const { IsOnline } = useInternet();
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

  const fetchData = function () {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9594549&lng=77.5805685&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
    // const initialurl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9594549&lng=77.5805685&page_type=DESKTOP_WEB_LISTING`;
    fetchHandler({
      url: url,
    });
  };
  useEffect(() => {
    if (offset <= OFFSET_LIMIT&&!search) {
      setshimmerdivs((prev) => [...prev, ...new Array(4)]);
      fetchData();
    }
  }, [offset]);

  if (!IsOnline) {
    return <h2>Internet is off check your internt connection</h2>;
  }

  return (
    <>
      <Topbar
        allrestro={allrestros}
        setRestroTorender={setRestaurantsToRender}
        setisSearch={setsearch}
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
