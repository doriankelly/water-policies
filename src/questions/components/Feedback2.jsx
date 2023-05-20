import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback2 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question2 == "option2") {
    return (
      <p className="text-center">
        Feedback para pregunta 2: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 2: respuesta incorrecta
      </p>
    );
  }
};
