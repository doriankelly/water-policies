import React, { useState } from "react";
import backButton from "../../assets/backButton.svg";
import logoText from "../../assets/logoText.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { QuestionNumber } from "../components/QuestionNumber";
import { Question1 } from "../components/Question1";

export const QuestionPage = () => {
  const navigate = useNavigate();
  const { questionNumber } = useParams();

  return (
    <div className="bg-backgroundPrimary min-h-screen pb-6">
      <div className="flex pt-6 mx-5">
        <button onClick={() => navigate(-1)}>
          <h1>
            <img src={backButton} alt="left arrow" />
          </h1>
        </button>
        <img
          className="text-center  ms-[calc(50%-7rem)] mt-2"
          src={logoText}
          alt="logo H2OH"
        />
      </div>
      <h2 className="mt-1 py-2 text-center text-white bg-primary">
        ¿Cuánto sabes de Políticas azules?
      </h2>

      <QuestionNumber questionNumber={questionNumber} />
      {questionNumber == 1 && <Question1 />}
    </div>
  );
};
