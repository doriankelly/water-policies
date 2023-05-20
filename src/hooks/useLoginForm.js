import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password, provider) => {
    setLoading(true);

    try {
      let url = "https://h2ohback.onrender.com/api/v1/auth";
      if (provider) {
        url += `/${provider}`;
        console.log(url)
      } else {
        url += "/login";
        console.log(url)
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      // Redireccionar a localhost:3000
      window.location.href = "http://localhost:5173/welcome";

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loading, error, login };
};
