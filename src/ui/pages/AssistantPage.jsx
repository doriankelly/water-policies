import React from "react";
import { Link } from "react-router-dom";
import gota from "../../assets/gota.png";

export const AssistantPage = () => {
  return (
    <div className="pt-10 bg-backgroundPrimary min-h-screen pb-6">
      <article className="border border-white drop-shadow w-10/12 bg-primary/90 text-white block m-auto  pt-6  px-4 pb-32 shadow-lg rounded-lg">
        <p className="text-center">
          ¡Bienvenido/a a nuestra plataforma sobre políticas azules! <br /> Aquí
          encontrarás información y recursos para aumentar tu concienciación
          sobre este tema. Explora preguntas frecuentes y descubre cómo puedes
          contribuir a la conservación de nuestros océanos y recursos marinos.
          ¡Únete a nosotros y hagamos del mundo un lugar más azul!
        </p>
      </article>
      <img
        className="relative -top-32 block m-auto w-56"
        src={gota}
        alt="logo"
      />
      <Link
        to="/"
        className="fixed left-1/2 -translate-x-1/2 bottom-2 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-2 shadow-lg rounded-3xl"
      >
        Siguiente
      </Link>
    </div>
  );
};
