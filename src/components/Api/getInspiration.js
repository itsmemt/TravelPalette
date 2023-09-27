export async function getAllInspiration() {
    try {
      console.log(process.env.REACT_APP_BASE_URL)
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/inspiration`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong.Try Again.");
      }
      return response.json();
    } catch (error) {
      throw new Error("API request error: " + error.message);
    }
  }
  