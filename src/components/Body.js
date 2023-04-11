import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restarauntList } from "../data/constatnt";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/hooks/useOnline";

export const Body = () => {
  const [searchInput, setsearchInput] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const onChangeInput = (e) => {
    setsearchInput(e.target.value);
  };

  const onSearchClick = () => {
    debugger;
    const data = filterData(searchInput, allRestaurants);
    console.log(data);
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
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, Please check your internet .</h1>;
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-4">
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
        {filteredRestaurants.length === 0 ? (
          <h2>No restaurant match your filter</h2>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurantMenu/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
