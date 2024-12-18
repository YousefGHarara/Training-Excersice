import "../assets/checkboxHandler.css";

import React, { useState } from "react";

const LIST_DATA = [
  { id: 1, value: "JavaScript" },
  { id: 2, value: "HTML" },
  { id: 3, value: "CSS" },
  { id: 4, value: "React js" },
  { id: 5, value: "Node js" },
  { id: 6, value: "Next js" },
];

const CheckboxHandler = () => {

  const [data, setData] = useState([]);

  const handleSelect = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if(isChecked) {
      // add item to data array
        setData([...data, e.target.value])
    }else {
      // remove item from data array
      const filteredData = data.filter((e) => {
        return e !== value;
      });
      setData(filteredData);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Programming Language</p>
        </div>

        <div className="card-body">

          {/* Display Language or Hide */}
          <div className="list-language">
          <label htmlFor="">Selected Language :
            {
              data.map((e) => {
                return <div className="box">{e}</div>
              })
            }

            </label>
          </div>

          {LIST_DATA.map((e) => {
            return (
              <div key={e.id} className="checkbox-container">
                <input
                  onChange={handleSelect}
                  type="checkbox"
                  name=""
                  id={e.id}
                  value={e.value}
                />
                <label htmlFor={e.id}>{e.value}</label>
              </div>
            );
          })}


        </div>
      </div>
    </div>
  );
};

export default CheckboxHandler;
