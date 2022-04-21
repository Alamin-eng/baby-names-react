import React from "react";
import BabyName from "./babyName";

const Favourites = ({ babyNames, favouritesNames, setFavouritesNames }) => {
  const favouriteBabyNames = babyNames.filter((babyName) =>
    favouritesNames.includes(babyName.id)
  );

  const removeFromFavourites = (id) => {
    setFavouritesNames(favouritesNames.filter((item) => item !== id));
  };

  const hasName = favouriteBabyNames.length > 0;

  return (
    <div>
      <h3 className="text-success">
        {hasName
          ? "Favourites:"
          : "Favourites: Click on some names below to add to your favourite list...."}
      </h3>
      <BabyName cash={favouriteBabyNames} onbtnClick={removeFromFavourites} />
      <hr></hr>
    </div>
  );
};

export default Favourites;
