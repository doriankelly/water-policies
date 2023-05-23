import React from "react";
import martillo from "../../../assets/martillo.png";

export const EmbalsesCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="droughtVisited"
        onClick={handleClick}
        className="m-0 z-10 mb-4 mt-7 drop-shadow w-11/12 border border-white bg-terciary hover:bg-primary text-darkBlue font-bold block  text-center m-auto shadow-lg rounded-2xl"
      >
        <img
          className="w-full rounded-t-2xl"
          src={martillo}
          alt="drought graph"
        />
        <p className="my-2">e.g.Embalses 1</p>
      </button>
    </article>
  );
};
