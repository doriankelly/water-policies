import React, { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);

    try {
      const response = await fetch("https://h2ohback.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      // Aquí puedes realizar las acciones necesarias después de iniciar sesión exitosamente, como guardar el token de autenticación, redireccionar, etc.

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loading, error, login };
};
