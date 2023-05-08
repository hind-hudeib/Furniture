import Card from "./Card.js";
import "../styles files/style products/filter.css"
import React, { useState } from "react";

function Filter() {
  const [checked, setChecked] = useState([]);
  const checkList = ["tables","chairs","Bed"];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };




  return (
    <>
    <div className="containe">
        <div className="filterCon">
          <h4 className="title">Filter By</h4>
          <div className="category">
          <p>category</p>
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span >{item}</span>
              </div>
            ))}
          </div>

          {/* <div className="category">
          <p>category</p>
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span >{item}</span>
              </div>
            ))}
          </div>

          <div className="category">
          <p>category</p>
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span >{item}</span>
              </div>
            ))}
          </div>

          <div className="category">
          <p>category</p>
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span >{item}</span>
              </div>
            ))}
          </div> */}

        </div>

      <Card checked={checked}/>
      </div>
    </>
  );
}

export default Filter;
