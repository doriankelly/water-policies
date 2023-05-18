import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Question1 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };
  return (
    <section>
      <article className="mt-3 mx-4 p-3 text-center text-white bg-primary rounded-xl leading-7 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, qDASDASAD ASD ASD ASD ASDA DASD ASD ASD ASD ASD ASD ASD ASDAuis
        nostrud exercitation
      </article>

      <fieldset
        name="question1"
        id="question1"
        className="w-full bg-transparent h-fit"
      >
        <label
          htmlFor="option1"
          className={`block mx-4 mt-3 p-2 bg-terciary rounded text-center text-sm ${
            selectedOption === "option1" ? "border-2 border-black" : "border-0"
          }`}
        >
          Ut enim ad minim veniam
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
          className={`block mx-4 mt-3 p-2 bg-terciary rounded text-center text-sm ${
            selectedOption === "option2" ? "border-2 border-black" : "border-0"
          }`}
        >
          Ut enim ad minim veniam
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
          className={`block mx-4 mt-3 p-2 bg-terciary rounded text-center text-sm ${
            selectedOption === "option3" ? "border-2 border-black" : "border-0"
          }`}
        >
          Ut enim ad minim veniam
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
          className={`block mx-4 mt-3 p-2 bg-terciary rounded text-center text-sm ${
            selectedOption === "option4" ? "border-2 border-black" : "border-0"
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
          Ut enim ad minim veniam
        </label>
      </fieldset>
      <Link
        to="/result/1"
        className={`my-6 mx-4  py-2  hover:bg-secondary text-white block  text-center m-auto  shadow-lg rounded-2xl ${
          selectedOption !== "" ? "bg-primary" : "bg-gray-400 hover:bg-gray-500"
        }`}
      >
        Siguiente pregunta (feedback?)
      </Link>
    </section>
  );
};
