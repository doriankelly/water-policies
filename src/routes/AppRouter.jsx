import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserRouter } from "./UserRouter";
import { AuthRouter } from "./AuthRouter";
import { useSelector } from "react-redux";
import { consultation } from "../api/fetch";
import { useDispatch } from "react-redux";
import { setUser} from '../store/slice/user/userSlice'

export const AppRouter = () => {

  const { userObject } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  
  const getUser =  async () => {

    const url = `https://h2ohback.onrender.com/api/v1/auth/${userObject}`

    const request = await consultation(url)
    console.log(request)
    if (request.ok === true) {
      (request.user._id)
    } else {
      dispatch(setUser(null))
    }
  }
 
  useEffect(() => {
    getUser()
  }, [])
  
  
  return (
    <>
      <Routes>
      {userObject  ? 
        <Route path="/*" element={<UserRouter />} />
        :
        <Route path="/*" element={<AuthRouter />} />
        }
      </Routes>
    </>
  );
};

