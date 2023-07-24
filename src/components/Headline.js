import React from "react";

const Headline = () => {
  return (
    <div className="header">
      <div className="header-container">
        <button
          className="btn btn-reset"
          onClick={() => window.location.reload()}
        >
          Again!
        </button>
        <p>
          (Created with:
          <a
            className="header-link"
            href="https://dictionaryapi.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Free Dictionary API
          </a>
          )
        </p>
      </div>
      <h1>Check your vocabulary!</h1>
    </div>
  );
};

export default Headline;
