import React from "react";
import CategoryItem from "./CategoryItem";

export default function ItemsbyCategory({ items }) {
  return (
    <div className="accordion" id="accordionExample">
      {items?.slice(2, items?.length - 2)?.map((foodcategory, index) => {
        let iscategory = false;
        let fooditems = foodcategory?.card?.card?.itemCards
          ? foodcategory?.card?.card?.itemCards
          : foodcategory?.card?.card?.categories;

        if (fooditems == foodcategory?.card?.card?.categories) {
          iscategory = true;
        }

        return (
          <CategoryItem
            key={`${foodcategory?.card?.card?.title}`}
            isCategory={iscategory}
            title={foodcategory?.card?.card?.title}
            id={index}
            items={fooditems}
          />
        );
      })}
    </div>
  );
}
