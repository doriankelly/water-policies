import { Routes, Route } from "react-router-dom";
import { HomePage } from "../ui/pages/index";
export const AppRouter = () => {
  //logica de si es logueado
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </>
  );
};
