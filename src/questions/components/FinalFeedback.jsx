import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { consultation } from "../../api/fetch";

export const FinalFeedback = () => {
  //const [userAnswers, setUserAnswers] = useState("");
  const [counter, setCounter] = useState(0);
  const [scoreCounter, setScoreCounter] = useState(0);

  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //collect score
  const { scoreObject } = useSelector((state) => state.score);
  //collect current visited pages state
  const { visitedObject } = useSelector((state) => state.visited);

  // useEffect(() => {
  //   setUserAnswers({ ...answersObject });
  // }, []);

  //correct answers
  const answers = {
    question1: "option1",
    question2: "option2",
    question3: "option4",
    question4: "option2",
  };

  //calculate number of questions correct
  useEffect(() => {
    for (const key in answers) {
      if (answersObject[key] === answers[key]) {
        setCounter((previousNumber) => previousNumber + 1);
      }
    }
  }, []);

  return (
    <>
      <p>{`final result: Acertaste ${counter} preguntas! tienes un nivel de conocimient de ${scoreObject.finalScore}%`}</p>
    </>
  );
};
