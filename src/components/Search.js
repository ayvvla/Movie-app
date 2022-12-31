import React from "react";

const Search = ({ searchItem, setSearchItem, setData, search, setSearch }) => {
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(search);
  };
  console.log(searchItem);
  return (
    <section className="search">
      <h1 style={{ color: "white", fontFamily: "cursive" }}> Popular Movies</h1>
      <form onSubmit={handleSubmit} className="search--form">
        <input
          type="search"
          placeholder="Search Movie..."
          value={searchItem}
          onChange={handleChange}
          className="search--input"
          required
        />
        <button className="btn searchbtn">Submit</button>
      </form>
    </section>
  );
};

export default Search;
