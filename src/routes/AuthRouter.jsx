import { Routes, Route, Navigate } from "react-router-dom";
import {
  IntroPage,
  LoginPage,
} from "../ui/pages";

export const AuthRouter = () => {
  const user = localStorage.getItem("id");
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};