import React from "react";
import { Link } from "react-router-dom";

function EachSearchResult({ component }) {
  return (
    <>
      <Link to={component.url} className="text-white">
        <div className="border-bottom border-white-fade-30 px-6 py-2 col-12 custom-search-result">
          <h6>{component.title}</h6>
          <p className="s2">{component.url}</p>
        </div>
      </Link>
    </>
  );
}

export default EachSearchResult;
