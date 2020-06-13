import React, { useState, useEffect } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [shouldCloseButtonShow, setCloseButtonShow] = useState(false);

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const resetSearchInput = (e) => {
    setSearchValue("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const { handler, setSearchValueHandler } = props;

  useEffect(() => {
    const searchInputValue = searchValue.trim();
    if (searchInputValue.length > 0) {
      handler(false);
      setSearchValueHandler(searchInputValue);
      setCloseButtonShow(true);
    } else {
      handler(true);
      setSearchValueHandler("");
      setCloseButtonShow(false);
    }
  }, [searchValue]);

  return (
    <>
      <form className="mx-2 my-2" onSubmit={onSubmitHandler}>
        <input
          id="searchInputBox"
          className="form-control input-dark"
          type="text"
          value={searchValue}
          placeholder="Type here..."
          onChange={onChangeHandler}
        />
      </form>
      {shouldCloseButtonShow && (
        <button
          onClick={resetSearchInput}
          id="search_close_btn"
          className="btn btn-danger"
        >
          X
        </button>
      )}
    </>
  );
}

export default Search;
