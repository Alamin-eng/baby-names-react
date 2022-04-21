import React from "react";

function BabyName({ cash, onbtnClick }) {
  return (
    <div className="babyNames">
      {cash.map(function (baby) {
        if (baby.sex === "m") {
          return (
            <>
              <button
                type="button"
                class="boy btn m-2"
                key={baby.id}
                onClick={() => onbtnClick(baby.id)}
              >
                {baby.name}
              </button>
            </>
          );
        } else {
          return (
            <>
              <button
                type="button"
                class="girl btn m-2"
                key={baby.id}
                onClick={() => onbtnClick(baby.id)}
              >
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
