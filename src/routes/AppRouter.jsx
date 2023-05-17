import { Routes, Route } from "react-router-dom";
import { HomePage, IntroPage } from "../ui/pages";
export const AppRouter = () => {
  //logica de si es logueado
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroPage/>} />
      </Routes>
    </>
  );
};
