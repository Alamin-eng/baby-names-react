import React, { useState } from "react";
import "./App.css";
import names from "./nameArray";
import Header from "./header";
import NamesList from "./namesList";
import Search from "./search";
import Favourites from "./favouriteName";
import Footer from "./footer";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [favouritesNames, setFavouritesNames] = useState([]);
// handle search
  function handleSearch(e){
    return setSearchInput(e.target.value)
  }
  return (
    <div className="container">
      <Header />
      <Favourites
        babyNames={names}
        favouritesNames={favouritesNames}
        setFavouritesNames={setFavouritesNames}
      />
      <Search searchInput={searchInput} setSearchInput={handleSearch} />
      <NamesList
        babyNames={names}
        searchInput={searchInput}
        favouritesNames={favouritesNames}
        setFavouritesNames={setFavouritesNames}
      />
      <Footer />
    </div>
  );
}

export default App;
