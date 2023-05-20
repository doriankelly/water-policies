import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  IntroPage,
  AssistantPage,
  UserProfilePage,
  LoginPage,
  SignupPage,
  MapPage,
} from "../ui/pages";
import {
  QuestionPage,
  FeedbackPage,
  FinalResultPage,
} from "../questions/pages";

import { MapData } from "../map/components";

export const AppRouter = () => {
  //logica de si es logueado
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<AssistantPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/map" element={<MapData />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/quiz/:questionNumber" element={<QuestionPage />} />
        <Route path="/result/:number" element={<FeedbackPage />} />
        <Route path="/final" element={<FinalResultPage />} />
        <Route path="/viewmap" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};
