import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback6 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question6 == "option2") {
    return (
      <p className="text-center">
        Feedback para pregunta 6: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 6: respuesta incorrecta
      </p>
    );
  }
};
