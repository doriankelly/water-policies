import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  IntroPage,
  AssistantPage,
  UserProfilePage,
} from "../ui/pages";

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
      </Routes>
    </>
  );
};
