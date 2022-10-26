import React from "react";
import { faBaby} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({boy, girl, allBaby}) {
  return (
    <header className="header-div ">
      <h1>Baby Name Picker</h1>

      <div className="icon-div">
        <button className="gender rounded p-1" onClick={boy}>
          <FontAwesomeIcon className="boy-icon rounded" icon={faBaby} /> Boy
        </button>
        <button className="gender rounded p-1" onClick={girl}>
          <FontAwesomeIcon className="girl-icon rounded" icon={faBaby} /> Girl
        </button>
        <button className="gender p-1" onClick={(e) => allBaby(e)}>
          <FontAwesomeIcon
            className="gender boygirl-icon rounded"
            icon={faBaby}
          />
          <FontAwesomeIcon
            className="gender boygirl-icon rounded"
            icon={faBaby}
          />{" "}
          All
        </button>
      </div>
    </header>
  );
}

export default Header;
