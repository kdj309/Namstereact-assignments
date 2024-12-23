import React, { useEffect, useState } from "react";
import { restrodata } from "../utils/mockData";
let initialrender = true;
function Topbar({ setRestroTorender, allrestro, setisSearch }) {
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    if (initialrender) {
      return;
    }

    let timerid = setTimeout(() => {
      setisSearch(true);
      let filteredRestro = allrestro.filter((restroitem) => {
        return restroitem.name.includes(searchVal);
      });
      setRestroTorender(filteredRestro);
    }, 1000);
    return () => {
      clearTimeout(timerid);
    };
  }, [searchVal]);

  return (
    <div className="topbarcontainer">
      <div>
        <input
          value={searchVal}
          placeholder="Search for restaurants"
          type="search"
          onChange={(e) => {
            initialrender = false;

            setSearchVal(e.target.value);
          }}
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default Topbar;
