import React from "react";


function BabyName(props) {
  return (
    <div className="babyNames">
        <input type='search' className="search" placeholder="Search"></input>
      {props.cash.map(function (baby) {
        if (baby.sex === "m") {
          return (
            <>
              <button type="button" class="boy btn m-2" key={baby.id}>
                {baby.name}
              </button>
            </>
          );
        } else {
          return (
            <>
              <button type="button" class="girl btn m-2" key={baby.id}>
                {baby.name}
              </button>
            </>
          );
        }
      })}
      <hr></hr>
    </div>
  );
}

export default BabyName;

