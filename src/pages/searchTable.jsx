import "../assets/searchTable.css";
import React, { useEffect, useRef, useState } from "react";

// import file.json
var DATA = require("./MOCH_DATA.json");

const SearchTable = () => {
  const [value, setValue] = useState("");
  const r = useRef();

  const onChangeSearch = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    // our api to fetch the search result
    setValue(searchTerm);
    console.log(`Search is ${searchTerm}`);
  };

  useEffect(() => {
    r.current.focus();
  }, []);

  return (
    <div className="wrapper">
      <div className="card">
        <div className="search-bar">
          <input ref={r} type="text" value={value} onChange={onChangeSearch} />
          <button onClick={() => onSearch(value)}>Search</button>
        </div>

        <div className="paper-search">
          <div className="list">
            {DATA.filter((i) => {
              const searchTerm = value.toLocaleLowerCase();
              const name = i.name.toLocaleLowerCase();
              return name.startsWith(searchTerm);
            })
              // .slice(0, 6)
              .map((e, i) => {
                return (
                  <p onClick={() => onSearch(e.name)} key={i}>
                    {e.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTable;
