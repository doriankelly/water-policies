import React from "react";

export const QuestionNumber = ({ questionNumber }) => {
  console.log(questionNumber);
  return (
    <>
      <p className="mx-4 mt-4 text-xs">Pregunta {questionNumber}</p>
      <div className="mx-4 my-2 flex">
        <div className="me-2 bg-primary rounded-md py-0.5 px-4 md:px-6 lg:px-10"></div>
        <div
          className={`me-2 ${
            questionNumber > 1 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-4 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2 ${
            questionNumber > 2 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-4 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2  ${
            questionNumber > 3 ? "bg-primary" : "bg-small-button"
          } rounded-md py-0.5 px-4 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2 ${
            questionNumber > 4 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-4 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2 ${
            questionNumber > 5 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-4 md:px-6 lg:px-10`}
        ></div>
        <div
          className={`me-2 ${
            questionNumber > 6 ? "bg-primary" : "bg-small-button"
          }  rounded-md py-0.5 px-4 md:px-6 lg:px-10`}
        ></div>
      </div>
    </>
  );
};
