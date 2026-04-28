const BASE_URL = "";

// Generic POST request
export async function postData(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("POST Error:", error);
    return { success: false, error: "Something went wrong" };
  }
}

// Generic GET request
export async function getData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("GET Error:", error);
    return { success: false, error: "Something went wrong" };
  }
}

// Lead submission specific function (important for your project)
export async function submitLead(formData) {
  return await postData("/api/lead", formData);
}
