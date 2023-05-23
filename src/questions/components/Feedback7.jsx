import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback7 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  if (answersObject.question7 == "option3") {
    return (
      <p className="text-center">
        Feedback para pregunta 7: respuesta correcta
      </p>
    );
  } else {
    return (
      <p className="text-center">
        Feedback para pregunta 7: respuesta incorrecta
      </p>
    );
  }
};
