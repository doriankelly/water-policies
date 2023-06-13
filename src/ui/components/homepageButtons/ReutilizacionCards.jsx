import React from "react";
import recycleWater from "../../../assets/homePageButtons/recycleWater.jpeg";
import recycle from "../../../assets/homePageButtons/recycle.png";

export const ReutilizacionCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="reutilizacion"
        onClick={handleClick}
        className="m-0 z-10 mb-8 mt-4 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-medium block  text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-2xl"
            src={recycleWater}
            alt="A close up of a drop of water falling into a body of water. Ripples are seen on the surface and a ball of water hovers above"
          />
        </div>
        <p className="my-2">Reutilización</p>
      </button>
    </article>
  );
};
