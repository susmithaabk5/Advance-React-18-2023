import React, { useState, useEffect } from "react";
import { MENU_URL } from "../../src/data/constatnt";

const useMenu = (id) => {
  //const [menu, setMenu] = useState({});
  const [menuItems, setMenuItems] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const response = await fetch(MENU_URL + id);
    const json = await response.json();
    // const iterate = json?.data?.cards[0]?.card?.card.info;
    const menuItems =
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.itemCards ||
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards ||
      json?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.itemCards ||
      json?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards;
    debugger;
    setMenuItems(menuItems);
    //setMenu(iterate);
  }
  return menuItems;
};

export default useMenu;
