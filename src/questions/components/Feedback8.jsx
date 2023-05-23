import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback8 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question8 == "option1") {
    return (
      <p className="text-center">
        Feedback para pregunta 8: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 8: respuesta incorrecta
      </p>
    );
  }
};
