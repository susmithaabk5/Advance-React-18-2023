import React from "react";
import { IMG_CLOUD } from "../data/constatnt";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="m-2 p-2  shadow-xl  w-52">
      <img src={IMG_CLOUD + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4 className="secondary">{cuisines.join(", ")}</h4>
      <h4 className="secondary">{avgRating}</h4>
    </div>
  );
};
