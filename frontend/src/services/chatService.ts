const API_URL = "http://127.0.0.1:8000/api/v1/chat/";

export async function sendMessage(message: string) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact SHAAN");
  }

  return response.json();
}