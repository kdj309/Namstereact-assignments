import React from "react";
import MenuItem from "./MenuItem";

export default function CategoryItem({
  title,
  id,
  items,
  isCategory = false,
  isToppicks = false,
}) {
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
            ? items?.map((categoryitem, index) => (
                <CategoryItem
                  key={`${categoryitem.title}${index}`}
                  id={`${categoryitem.title.replace(/ /g, "")}${index}`}
                  items={categoryitem?.itemCards}
                  title={categoryitem.title}
                />
              ))
            : items?.map((fooditem) => {
                // console.log(fooditem);
                const itemprice = fooditem?.card?.info?.price
                  ? fooditem?.card?.info?.price
                  : fooditem?.card?.info?.defaultPrice;

                let toppicksitems = {};
                if (isToppicks) {
                  toppicksitems.key = fooditem?.dish?.info?.id;
                  toppicksitems.title = fooditem?.title;
                  toppicksitems.icon =
                    fooditem?.dish?.info?.itemAttribute?.vegClassifier !=
                    "NONVEG";
                  toppicksitems.price = fooditem?.dish?.info?.price
                    ? fooditem?.dish?.info?.price
                    : fooditem?.card?.info?.defaultPrice;
                  toppicksitems.imgid = fooditem?.dish?.info?.imageId;
                  toppicksitems.description = fooditem?.dish?.info?.description;
                }
                return (
                  <MenuItem
                    key={
                      Object.keys(toppicksitems).length
                        ? toppicksitems.key
                        : fooditem?.card?.info?.id
                    }
                    title={
                      Object.keys(toppicksitems).length
                        ? toppicksitems.title
                        : fooditem?.card?.info?.name
                    }
                    icon={
                      Object.keys(toppicksitems).length
                        ? toppicksitems.icon
                        : fooditem?.card?.info?.isVeg
                    }
                    price={
                      Object.keys(toppicksitems).length
                        ? toppicksitems.price
                        : itemprice
                    }
                    imgid={
                      Object.keys(toppicksitems).length
                        ? toppicksitems.imgid
                        : fooditem?.card?.info?.imageId
                    }
                    description={
                      Object.keys(toppicksitems).length
                        ? toppicksitems.description
                        : fooditem?.card?.info?.description
                    }
                  />
                );
              })}
        </div>
      </div>
      <div className="category-separator"></div>
    </div>
  );
}
