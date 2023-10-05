export default async function getTripByTripId(id) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/itinerary/${id}`, {
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