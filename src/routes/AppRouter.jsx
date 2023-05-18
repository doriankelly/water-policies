import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  IntroPage,
  AssistantPage,
  UserProfilePage,
  QuestionPage,
  FeedbackPage,
} from "../ui/pages";
export const AppRouter = () => {
  //logica de si es logueado
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<AssistantPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/quiz/:questionNumber" element={<QuestionPage />} />
        <Route path="/result/:number" element={<FeedbackPage />} />
      </Routes>
    </>
  );
};
