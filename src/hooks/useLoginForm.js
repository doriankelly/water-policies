import { useState } from "react";

import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  const login = async (email, password, provider) => {
    setLoading(true);

    try {
      let url = "https://h2ohback.onrender.com/api/v1/auth";
      if (provider) {
        url += `/${provider}`;
        console.log(url);
      } else {
        url += "/login";
        console.log(url);
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(email);

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      const data = await response.json();
      console.log('esto es data:', data);

      // Guardar email y uid en localStorage
      localStorage.setItem("id", data.user._id);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("date", data.user.date);
      localStorage.setItem("__v", data.user.__v);


      // Redireccionar a /welcome utilizando useNavigate
      window.location.href = "https://flourishing-sable-f526bd.netlify.app"


      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loading, error, login };
};
