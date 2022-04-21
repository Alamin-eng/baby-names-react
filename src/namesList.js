import React from "react";
import BabyName from "./babyName";

function NamesList({
  babyNames,
  searchInput,
  favouritesNames,
  setFavouritesNames,
}) {
  let sortNamesAndFilter = babyNames
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      } else {
        return 0;
      }
    })
    .filter((e) => e.name.toLowerCase().includes(searchInput.toLowerCase()))
    .filter((e) => !favouritesNames.includes(e.id));

  const addToFavourites = (id) => {
    setFavouritesNames([...favouritesNames, id]);
  };

  return (
    <div>
      <BabyName cash={sortNamesAndFilter} onbtnClick={addToFavourites} />
    </div>
  );
}
export default NamesList;
