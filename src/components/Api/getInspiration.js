export async function getAllInspiration() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/inspiration/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
      credentials: "include",
    });
    console.log(response)
    if (!response.ok) {
      throw new Error("Something went Wrong.Try Again.");
    }
    return response.json();
  } catch (error) {
    throw new Error("API request error: " + error.message);
  }
}
