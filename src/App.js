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
  const [gender, setGender] = useState("");
 
// handle search
  function handleSearch(e){
    return setSearchInput(e.target.value)
  }

  // handle boy baby's gender
  function boy(){
    setGender('m')
  }
  // handle girl baby's gender
  function girl(){
    setGender('f')
  }
 // handle all gender
  function allBaby(){
    setGender("")
  }
  return (
    
      <div className="container">
        <Header boy={boy} girl={girl} allBaby={allBaby} />
        <Favourites
          babyNames={names}
          favouriteNames={favouritesNames}
          setFavouriteNames={setFavouritesNames}
        />
        <Search searchInput={searchInput} setSearchInput={handleSearch} />
        <NamesList
          babyNames={names}
          gender={gender}
          searchInput={searchInput}
          favouriteNames={favouritesNames}
          setFavouriteNames={setFavouritesNames}
        />
        <Footer />
      </div>
  );
}

export default App;
