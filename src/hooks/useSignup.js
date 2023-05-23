import { useState } from "react";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const singUp = async (email, password, ccaa, provider) => {
    setLoading(true);

    try {
      let url = "https://h2ohback.onrender.com/api/v1/auth";
      if (provider) {
        url += `/${provider}`;
        console.log(url);
      } else {
        url += "/register";
        console.log(url);
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, ccaa }),
      });
      

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
      // Redireccionar a localhost:3000
     window.location.href = "http://localhost:5173/welcome";

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loading, error, singUp };
};
