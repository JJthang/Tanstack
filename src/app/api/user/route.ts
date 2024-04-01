export const GET = async () => {
  try {
    const res = await fetch("https://660521b72ca9478ea17f6c52.mockapi.io/w", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return Response.json(data)
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
