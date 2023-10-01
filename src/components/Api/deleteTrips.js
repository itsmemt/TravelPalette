export default async function DeleteTrips(tripId) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/itinerary/${tripId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
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