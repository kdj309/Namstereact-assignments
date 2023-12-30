import React from "react";
import CategoryItem from "./CategoryItem";

export default function ItemsbyCategory({ items }) {
  // console.log(items);
  // return <h2>Error occurred</h2>
  return (
    <main className="accordion" id="accordionExample">
      {items?.slice(1, items?.length - 2)?.map((foodcategory, index) => {
        let iscategory = false;
        let toppicks=false;
        let fooditems = foodcategory?.card?.card?.itemCards
          ? foodcategory?.card?.card?.itemCards
          : foodcategory?.card?.card?.title === "Top Picks"
          ? foodcategory?.card?.card?.carousel
          : foodcategory?.card?.card?.categories;
        if (fooditems == foodcategory?.card?.card?.categories) {
          iscategory = true;
        }else if(fooditems==foodcategory?.card?.card?.carousel){
          toppicks=true
        }
        return (
          <CategoryItem
            key={`${foodcategory?.card?.card?.title}${index}`}
            isCategory={iscategory}
            title={foodcategory?.card?.card?.title}
            id={index}
            items={fooditems}
            isToppicks={toppicks}
          />
        );
      })}
    </main>
  );
}
