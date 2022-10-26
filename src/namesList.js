import React from "react";
import BabyName from "./babyName";

function NamesList({
  babyNames,
  searchInput,
  gender,
  favouriteNames,
  setFavouriteNames,
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
    .filter((e) => !favouriteNames.includes(e.id))
    .filter((e) => {
      if(gender === ''){
        return true // notice how we passed true for empty string (related to gender)
      } else {
        return e.sex === gender
      }
    } )
     
  const addToFavourites = (id) => {
    setFavouriteNames([...favouriteNames, id]);
  };
 
  return (
    <div>
      <BabyName cash={sortNamesAndFilter} onbtnClick={addToFavourites}/>
    </div>
  );
}
export default NamesList;
