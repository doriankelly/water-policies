import React from "react";
import recycle from "../../../assets/homePageButtons/recycle.png";

export const ReutilizacionCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="reutilizacion"
        onClick={handleClick}
        className="m-0 z-10 mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-bold block  text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 overflow-hidden">
          <img
            className="w-full rounded-t-2xl"
            src={recycle}
            alt="Photo of an embalse taken from a high vantage point"
          />
        </div>
        <p className="my-2">Reutilización de agua</p>
      </button>
    </article>
  );
};
