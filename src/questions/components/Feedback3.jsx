import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback3 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question3 == "option2") {
    return (
      <p className="text-center">
        Feedback para pregunta 3: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 3: respuesta incorrecta
      </p>
    );
  }
};
