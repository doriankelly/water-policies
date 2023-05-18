export const useSignup = async (data) => {
    try {
      const response = await fetch("https://h2ohback.onrender.com/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error("Error creating user");
      }
    } catch (error) {
      throw new Error("Error creating user", error);
    }
  };
  