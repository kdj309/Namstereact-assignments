import React from "react";
import MenuItem from "./MenuItem";

export default function CategoryItem({ title, id, items, isCategory = false }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button category-title"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="true"
          aria-controls={`#collapse${id}`}
        >
          {title}({items?.length})
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse show"
        // data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {isCategory
            ? items.map((categoryitem, index) => (

                <CategoryItem
                  key={`${categoryitem.title}${index}`}
                  id={`${categoryitem.title.replace(/ /g,"")}${index}`}
                  items={categoryitem?.itemCards}
                  title={categoryitem.title}
                />
              ))
            : items?.map((fooditem) => {
                // console.log(fooditem);
                const itemprice=fooditem?.card?.info?.price?fooditem?.card?.info?.price:fooditem?.card?.info?.defaultPrice
                return (
                  <MenuItem
                    key={fooditem?.card?.info?.id}
                    title={fooditem?.card?.info?.name}
                    icon={fooditem?.card?.info?.isVeg}
                    price={itemprice}
                    imgid={fooditem?.card?.info?.imageId}
                    description={fooditem?.card?.info?.description}
                  />
                );
              })}
        </div>
      </div>
      <div className='category-separator'></div>
    </div>
  );
}
