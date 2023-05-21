import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAnswers } from "../../store/slice/answers/answersSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLocal } from "../../helpers/localStorage";

export const Question1 = ({ questionNumber }) => {
  const navigate = useNavigate();
  const correctAnswer = "option1";
  const [selectedOption, setSelectedOption] = useState("");
  const [answerResult, setAnswerResult] = useState("border-black");
  const dispatch = useDispatch();

  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);

  const nextQuestion = () => {
    navigate("/result/1");
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
    const answer = { question1: selectedOption };
    dispatch(setAnswers(answer));

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
        En las últimas dos décadas. <br /> ¿Cuánta agua crees que consume de
        media una persona en su casa? (por dia?)
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
          39,3 litros
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
          33,8 litros
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
          53,4 litros
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
          68,4 litros
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
