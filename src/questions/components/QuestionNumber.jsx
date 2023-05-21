import React from "react";

export const QuestionNumber = ({ questionNumber }) => {
  const titles = [
    "Primera pregunta",
    "Segunda pregunta",
    "Tercera pregunta",
    "Cuarta pregunta",
    "Quinta pregunta",
  ];

  return (
    <>
      <p className="mx-4 mt-4 text-xs">
        {titles[parseInt(questionNumber) - 1]}
      </p>
      <div className="mx-4 my-2 flex">
        {titles.map((item, i) => (
          <div
            key={item}
            className={`me-2  ${
              questionNumber > i ? "bg-primary" : "bg-small-button"
            } rounded-md py-0.5 px-5 md:px-6 lg:px-10`}
          ></div>
        ))}
      </div>
      {/* <div className="mx-4 my-2 flex">
        <div className="me-2 bg-primary rounded-md py-0.5 px-5 md:px-6 lg:px-10"></div>
        <div
          className={`me-2 ${
            questionNumber > 1 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-5 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2 ${
            questionNumber > 2 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-5 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2  ${
            questionNumber > 3 ? "bg-primary" : "bg-small-button"
          } rounded-md py-0.5 px-5 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2 ${
            questionNumber > 4 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-5 md:px-6 lg:px-10`}
        ></div>
      </div> */}
    </>
  );
};
