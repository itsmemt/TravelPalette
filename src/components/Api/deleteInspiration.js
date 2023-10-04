export default async function DeleteInspiration(inspirationId) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/inspiration/${inspirationId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.log("first",errorData)
      // Display the error message in a toast notification
      return errorData;
      throw new Error("Something went Wrong.Try Again.");
    }
    return response.json();
  } catch (error) {
    console.log("ft",error)
    return error.status;
    throw new Error("API request error: " + error.message);
  }
}
