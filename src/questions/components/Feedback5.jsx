import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback5 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);

  return <p className="text-center">Feedback para pregunta 5: informacion</p>;
};
