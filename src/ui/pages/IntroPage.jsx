import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const IntroPage = () => {
  const navigate = useNavigate();
  const start = () => {
    navigate("/login");
  };
  useEffect(() => {
    setTimeout(start, 1000);
  }, []);

  return (
    <>
      <div className="bg-backgroundPrimary min-h-screen">
        <article className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex justify-center transform rotate-10">
            <img src="src/assets/newlogo.png" alt="gotaInformadora" srcSet="" />
          </div>
        </article>
      </div>
    </>
  );
};
