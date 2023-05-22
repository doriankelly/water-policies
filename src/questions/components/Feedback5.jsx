import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback5 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question5 == "option4") {
    return (
      <p className="text-center">
        Feedback para pregunta 5: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 5: respuesta incorrecta
      </p>
    );
  }
};
