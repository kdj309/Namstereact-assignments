// {
//     "lat": "21.99740",
//     "lng": "79.00110",
//     "nextOffset": "CJhlELQ4KIDwqsix9JDpCDCnEzgB",
//     "widgetOffset": {
//       "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "9",
//       "inlineFacetFilter": "",
//       "restaurantCountWidget": ""
//     },
//     "filters": {},
//     "seoParams": {
//       "seoUrl": "https://www.swiggy.com/restaurants",
//       "pageType": "FOOD_HOMEPAGE",
//       "apiName": "FoodHomePage"
//     },
//     "page_type": "DESKTOP_WEB_LISTING",
//     "_csrf": "Ne2FmJXLDMiv-Tv7mdA7IpKkl0kwJTX8Vz-BIxr8"
//   }
export const getNextOffset = async (csrf, offset, lat, lng) => {
  try {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "POST",
        body: JSON.stringify({
          _csrf: csrf,
          nextOffset: offset,
          page_type: "DESKTOP_WEB_LISTING",
          lat: lat ?? "21.99740",
          lng: lng ?? "79.00110",
        }),
      }
    );
    const offsetdata=await res.json();
    console.log({offsetdata});
    return offsetdata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map((v)=>v.info)
  } catch (error) {
    console.log(error);
  }
};
