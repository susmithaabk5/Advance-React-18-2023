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
      <div className=" w-80 p- 5 m-4 relative  bg-gray-100  flex items-center">
        <input
          type="search"
          className="flex-grow bg-transparent text-gray-700 leading-tight focus:outline-none mr-2"
          placeholder="Search for Restaurant and Foods...."
          value={searchInput}
          onChange={(e) => onChangeInput(e)}
        />
        <button
          className=" h-10 w-10 focus:outline-none flex-shrink-0"
          onClick={() => onSearchClick()}
        >
          <svg
            className="h-6 pl-2 fill-current text-orange-500"
            viewBox="0 0 20 20"
          >
            <path d="M8 15a7 7 0 1 1 4.95-2.05L17 16.17l-.83.83-3.22-3.22A7 7 0 0 1 8 15zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
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
