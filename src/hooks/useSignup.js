export const useSignup = async (data, provider) => {
  try {
    let url = `https://h2ohback.onrender.com/api/v1/auth/register`;
    if (provider === "google") {
      url += "/google";
    } else if (provider === "facebook") {
      url += "/facebook";
    } else if (provider === "apple") {
      url += "/apple";
    }

    const response = await fetch(url, {
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
    throw error;
  }
};
