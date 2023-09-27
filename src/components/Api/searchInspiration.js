export async function searchInspiration(searchParams) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/inspiration/search?query=${searchParams}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    console.log(response)
    if (!response.ok) {
      throw new Error("Something went Wrong.Try Again.");
    }
    return response.json();
  } catch (error) {
    throw new Error("API request error: " + error.message);
  }
}
export async function searchInspirationByTags(searchParams) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/tags/search?query=${searchParams}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    console.log(response)
    if (!response.ok) {
      throw new Error("Something went Wrong.Try Again.");
    }
    return response.json();
  } catch (error) {
    throw new Error("API request error: " + error.message);
  }
}
