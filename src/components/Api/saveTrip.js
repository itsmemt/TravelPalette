export async function saveTrip(payload) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/itinerary/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
  export async function updateTrip(payload) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/itinerary/update/${payload.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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