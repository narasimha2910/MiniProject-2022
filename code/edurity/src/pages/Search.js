import React, { useEffect } from "react";

const Search = ({ setActive }) => {
  useEffect(() => {
    setActive(4);
  }, [setActive]);

  return (
    <>
      <h1>Search</h1>
    </>
  );
};

export default Search;
