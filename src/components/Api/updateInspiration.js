export default async function updateInspiration(payload) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/inspiration/update/${payload.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        throw new Error("Something went Wrong.Try Again.");
      }
      return response.json();
    } catch (error) {
      throw new Error("API request error: " + error.message);
    }
  }
  