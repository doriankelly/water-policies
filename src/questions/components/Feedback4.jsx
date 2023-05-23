import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback4 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question4 == "option3") {
    return (
      <p className="text-center">
        Feedback para pregunta 4: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 4: respuesta incorrecta
      </p>
    );
  }
};
