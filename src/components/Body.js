import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restarauntList } from "../data/constatnt";
import Shimmer from "./Shimmer";
function filterData(searchInput, restarauntList) {
  const filterData = restarauntList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}

export const Body = () => {
  const [searchInput, setsearchInput] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const onChangeInput = (e) => {
    setsearchInput(e.target.value);
  };
  const onSearchClick = () => {
    const data = filterData(searchInput, restarauntList);
    setfilteredRestaurants(data);
  };
  useEffect(() => {
    getRestaraunt();
  }, []);
  async function getRestaraunt() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1487898&lng=80.2305586&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json, "json```````````");
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          value={searchInput}
          placeholder="Search"
          onChange={(e) => onChangeInput(e)}
        />
        <button className="search-button" onClick={() => onSearchClick()}>
          Search
        </button>
      </div>
      <div className="restaurant_list">
        {filteredRestaurants.map((restaurant, index) => {
          return <RestaurantCard {...restaurant.data} key={index} />;
        })}
      </div>
    </>
  );
};
