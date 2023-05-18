import React from "react";
import gota from "../../assets/gota.png";
import { Link, useParams } from "react-router-dom";

export const FeedbackPage = () => {
  const { number } = useParams();
  console.log(number);
  //use number as condition for feedback
  return (
    <div className="pt-14 bg-backgroundPrimary min-h-screen pb-6">
      <article className="border border-white drop-shadow w-10/12 bg-primary/80 text-white block m-auto  pt-6 pb-48 px-4 shadow-lg rounded-lg">
        <p>Feedback here!</p>
      </article>
      <img
        className="relative -top-40 block m-auto w-8/12"
        src={gota}
        alt="logo"
      />
      <Link
        to="/"
        className="relative  -top-36 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-2 shadow-lg rounded-3xl"
      >
        Siguiente
      </Link>
    </div>
  );
};
