import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserRouter } from "./UserRouter";
import { AuthRouter } from "./AuthRouter";
import { useSelector } from "react-redux";

export const AppRouter = () => {

  const { userObject } = useSelector((state) => state.user);

  return (
    <>
      <Routes>
      {userObject ? 
        <Route path="/*" element={<UserRouter />} />
        :
        <Route path="/*" element={<AuthRouter />} />
        }
      </Routes>
    </>
  );
};
