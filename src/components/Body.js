import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restarauntList } from "../data/constatnt";
function filterData(searchInput, restarauntList) {
  const filterData = restarauntList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}
export const Body = () => {
  const [searchInput, setsearchInput] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] =
    useState(restarauntList);
  const onChangeInput = (e) => {
    setsearchInput(e.target.value);
  };
  const onSearchClick = () => {
    debugger;
    const data = filterData(searchInput, restarauntList);
    setfilteredRestaurants(data);
  };
  return (
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
