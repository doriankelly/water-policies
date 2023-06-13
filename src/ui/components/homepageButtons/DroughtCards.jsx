import React from "react";
import martillo from "../../../assets/martillo.png";
import sequiaMeteor from "../../../assets/homePageButtons/sequiaMeteor.png";
import sequiaAgricola from "../../../assets/homePageButtons/sequiaAgricola.png";
import sequiaSocio from "../../../assets/homePageButtons/sequiaSocio.png";
import sequiaHidro from "../../../assets/homePageButtons/sequiaHidro.png";

export const DroughtCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="sequiaMeteorologica"
        onClick={handleClick}
        className="m-0 z-10 mb-2 mt-4 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-medium block  text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-2xl "
            src={sequiaMeteor}
            alt="An arid, dry riverbed with mountains and a setting sun in the background"
          />
        </div>
        <p className="my-2">Sequía meteorológica</p>
      </button>
      <button
        id="sequiaAgricola"
        onClick={handleClick}
        className="mb-2 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-medium block text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-2xl"
            src={sequiaAgricola}
            alt="hands cupping a plant shoot growing from cracked, dry earth"
          />
        </div>
        <p className="my-2">Sequía agrícola</p>
      </button>
      <button
        id="sequiaSocioeconomica"
        onClick={handleClick}
        className="mb-2 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-medium block text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-2xl"
            src={sequiaSocio}
            alt="An old fashioned brass water tap in the foreground, a dry field and setting sun in the background"
          />
        </div>
        <p className="my-2">Sequía socioeconómica</p>
      </button>
      <button
        id="sequiaHidrologica"
        onClick={handleClick}
        className="mb-7 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-medium block text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-2xl"
            src={sequiaHidro}
            alt="A dry dam or river bed with cracked earth and a small body of water in the distance"
          />
        </div>
        <p className="my-2">Sequía hidrológica</p>
      </button>
    </article>
  );
};
