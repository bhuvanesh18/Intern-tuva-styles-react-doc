import React from "react";
import api from "../api/componentsApi.json";
import EachSearchResult from "./EachSearchResult";

function SearchResults(props) {
  const { searchInputValue } = props;
  console.log(searchInputValue);

  const searchResults = api.filter((component) =>
    component.keywords.some((keyword) => keyword.indexOf(searchInputValue) >= 0)
  );

  let haveResults = false;
  if (searchResults.length > 0) {
    haveResults = true;
  }
  return (
    <div
      id="searchResults"
      className="Box box-shadow-large bg-gray-dark container-lg clearfix d-inline-block position-fixed"
    >
      <h5 className="text-center text-yellow font-weight-normal py-2">
        Search Results
      </h5>
      {haveResults &&
        searchResults.map((component) => (
          <EachSearchResult key={component.id} component={component} />
        ))}
      {!haveResults && (
        <h4 className="text-center text-red bg-white font-weight-normal px-4 py-4 mb-2">
          No search results found!
        </h4>
      )}
    </div>
  );
}

export default SearchResults;
