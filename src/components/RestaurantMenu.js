import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CLOUD } from "../data/constatnt";

function RestaurantMenu() {
  const [menu, setMenu] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1487898&lng=80.2305586&restaurantId=363359"
    );
    const json = await response.json();
    const iterate = json?.data?.cards[0]?.card?.card.info;
    setMenu(iterate);
  }
  return (
    <div>
      <h1>Restaurant id = {id}</h1>
      <p>Restaurant Menu</p>
      <h1>{menu.name}</h1>
      <img src={IMG_CLOUD + menu.cloudinaryImageId} alt={menu.name} />
    </div>
  );
}

export default RestaurantMenu;
