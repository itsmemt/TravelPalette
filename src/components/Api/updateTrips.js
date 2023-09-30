export default async function updateTrips(tripId, data) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/itinerary/update/${tripId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
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
