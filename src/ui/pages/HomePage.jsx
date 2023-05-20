import React from "react";
import logoText from "../../assets/logoText.png";
import userButton from "../../assets/userButton.svg";
import { Link } from "react-router-dom";
import { MapContainerComp } from "../../map/components";

export const HomePage = () => {
  return (
    <div className="bg-backgroundPrimary min-h-screen pb-6">
      <section>
        <hgroup className="flex justify-between pt-10">
          <h1>
            <img className="mx-5 w-36" src={logoText} alt="logo" />
          </h1>
          <Link to="/profile">
            <img
              className="mx-5"
              src={userButton}
              alt="button to edit user details"
            />
          </Link>
        </hgroup>

        <h2 className="font-bold text-darkBlue text-xs mx-5 my-2 md:text-center">
          Selección de categoría
        </h2>
        <article className="flex flex-wrap justify-start mx-3 md:justify-center">
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Políticas azules
          </button>
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Buenos usos
          </button>
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Sequía
          </button>
          <button className="my-1 ms-2  py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Contaminación
          </button>
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Mas cosas
          </button>
        </article>
        <button className="mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-secondary hover:bg-primary text-white block  text-center m-auto py-3 shadow-lg rounded-3xl">
          Legislación sobre (Insert)
        </button>
        <button className="mb-8 drop-shadow w-11/12 border border-terciary bg-secondary hover:bg-primary text-white block text-center m-auto py-3 shadow-lg rounded-3xl">
          Curiosidades sobre (Insert)
        </button>

        <div className="border-t border-secondary w-11/12 block m-auto"></div>

        <div className="mt-3 mx-3 mb-2 flex justify-between">
          <p className="text-xs font-bold text-darkBlue">
            Reservas de agua en España
          </p>
          <Link to="/viewmap" className="text-xs text-darkBlue">
            ver mapa
          </Link>
        </div>

        <div className="relative bg-white h-64 w-full text-center border">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <MapContainerComp />
          </div>
        </div>
        <Link
          to="/quiz/1"
          className="my-10 py-3 drop-shadow w-11/12 bg-primary hover:bg-secondary text-white block  text-center m-auto  shadow-lg rounded-3xl"
        >
          Iniciar encuesta
        </Link>
      </section>
    </div>
  );
};
