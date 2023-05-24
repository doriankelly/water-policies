import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAnswers } from "../../store/slice/answers/answersSlice";
import { setScore } from "../../store/slice/score/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLocal } from "../../helpers/localStorage";

export const Question7 = () => {
  const navigate = useNavigate();
  const correctAnswer = "option3";
  const [selectedOption, setSelectedOption] = useState("");

  const [answerResult, setAnswerResult] = useState("border-black");
  const dispatch = useDispatch();

  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  const { scoreObject } = useSelector((state) => state.score);

  const nextQuestion = () => {
    navigate("/result/7");
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //configure button border colour options
    if (selectedOption == correctAnswer) {
      setAnswerResult("border-green-500");
    } else {
      setAnswerResult("border-emphasis");
    }

    // set answer to answer state
    const answer = { ...answersObject, question7: selectedOption };
    dispatch(setAnswers(answer));

    //asign weighting

    switch (selectedOption) {
      case "option1":
        dispatch(setScore({ ...scoreObject, question7: 0.2 }));
        break;
      case "option2":
        dispatch(setScore({ ...scoreObject, question7: 0.5 }));
        break;
      case "option3":
        dispatch(setScore({ ...scoreObject, question7: 1 }));
        break;
      case "option4":
        dispatch(setScore({ ...scoreObject, question7: 0.1 }));
        break;
    }
    //after half second, move to feedback page
    setTimeout(nextQuestion, 300);
  };

  //on any change in answersObject state, update local storage
  useEffect(() => {
    setLocal(answersObject);
  }, [answersObject]);

  return (
    <section className="pb-20">
      <article className="mt-5 mx-4 px-5 py-5 text-center text-white bg-primary rounded-2xl leading-6 text-sm">
        ¿Cuál es el porcentaje de reutilización de aguas residuales tratadas en
        España?
      </article>

      <form
        onSubmit={handleSubmit}
        name="question1"
        id="question1"
        className="w-full bg-transparent h-fit"
      >
        <label
          htmlFor="option1"
          className={`block mx-4 mt-2vh p-3 bg-terciary rounded text-center font-semibold ${
            selectedOption === "option1"
              ? `border-2 ${answerResult}`
              : "border-0"
          }`}
        >
          25.4%
          <input
            type="radio"
            id="option1"
            name="question1"
            onChange={handleOptionChange}
            checked={selectedOption === "option1"}
            className="opacity-0 absolute"
          />
        </label>

        <label
          htmlFor="option2"
          className={`block mx-4 mt-2vh p-3 bg-terciary rounded text-center font-semibold ${
            selectedOption === "option2"
              ? `border-2 ${answerResult}`
              : "border-0"
          }`}
        >
          5.72%
          <input
            type="radio"
            id="option2"
            name="question1"
            className="opacity-0 absolute"
            onChange={handleOptionChange}
            checked={selectedOption === "option2"}
          />
        </label>

        <label
          htmlFor="option3"
          className={`block mx-4 mt-2vh p-3 bg-terciary rounded text-center font-semibold ${
            selectedOption === "option3"
              ? `border-2 ${answerResult}`
              : "border-0"
          }`}
        >
          9.96%
          <input
            type="radio"
            id="option3"
            name="question1"
            className="opacity-0 absolute"
            onChange={handleOptionChange}
            checked={selectedOption === "option3"}
          />
        </label>

        <label
          htmlFor="option4"
          className={`block mx-4 mt-2vh p-3 bg-terciary rounded text-center font-semibold ${
            selectedOption === "option4"
              ? `border-2 ${answerResult}`
              : "border-0"
          }`}
        >
          <input
            type="radio"
            id="option4"
            name="question1"
            onChange={handleOptionChange}
            checked={selectedOption === "option4"}
            className="opacity-0 absolute"
          />
          50.25%
        </label>
      </form>

      <button
        onClick={handleSubmit}
        className={`mt-6 py-2 fixed bottom-4vh left-1/2 -translate-x-1/2   text-white block  text-center m-auto  shadow-lg rounded-2xl w-11/12 ${
          selectedOption !== ""
            ? "bg-primary hover:bg-secondary"
            : "bg-gray-400 hover:bg-gray-400"
        }`}
        disabled={selectedOption !== "" ? false : true}
      >
        Siguiente pregunta
      </button>
    </section>
  );
};
