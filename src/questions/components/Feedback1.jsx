import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback1 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question1 == "option2") {
    return (
      <p className="text-center">
        Feedback para pregunta 1: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 1: respuesta incorrecta
      </p>
    );
  }
};
