import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../utils/hooks/useMenu";
import { IMG_CLOUD } from "../data/constatnt";

function RestaurantMenu() {
  const { id } = useParams();
  const menuItems = useMenu(id);
  return (
    <div className="cardMenu">
      <div>
        <h2 style={{ textAlign: "center" }}>Menu</h2>
      </div>
      <div>
        <ul>
          {menuItems?.map((item, index) => {
            return (
              <li>
                <h4>
                  {item?.card?.info?.name} ------- ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
