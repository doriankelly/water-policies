import React from "react";
import gota from "../../assets/gota.png";
import { Feedback1 } from "../components/Feedback1";
import { Feedback2 } from "../components/Feedback2";
import { Feedback3 } from "../components/Feedback3";
import { Feedback4 } from "../components/Feedback4";
import { Feedback5 } from "../components/Feedback5";
import { Link, useParams } from "react-router-dom";
import { FinalFeedback } from "../components/FinalFeedback";

export const FeedbackPage = () => {
  const { number } = useParams();
  console.log(number);
  //use number as condition for feedback
  return (
    <div className="pt-16 bg-backgroundPrimary min-h-screen ">
      <article className="border border-white drop-shadow w-10/12 bg-primary/90 text-white block m-auto  pt-6  px-4 h-96 shadow-lg rounded-lg">
        {number == 1 && <Feedback1 />}
        {number == 2 && <Feedback2 />}
        {number == 3 && <Feedback3 />}
        {number == 4 && <Feedback4 />}
        {number == 5 && <Feedback5 />}
        {number == 6 && <FinalFeedback />}
      </article>
      <img
        className="relative -top-32 block m-auto w-56"
        src={gota}
        alt="logo"
      />
      {number == 5 ? (
        <Link
          to="/final"
          className="fixed left-1/2 -translate-x-1/2 bottom-2 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-2 shadow-lg rounded-3xl"
        >
          Siguiente
        </Link>
      ) : (
        <Link
          to={`/quiz/${parseInt(number) + 1}`}
          className="fixed left-1/2 -translate-x-1/2 bottom-2 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-2 shadow-lg rounded-3xl"
        >
          Siguiente
        </Link>
      )}
    </div>
  );
};
