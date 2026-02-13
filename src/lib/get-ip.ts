export const getIp = async () => {
  try {
    const resp = await fetch("https://api.ipify.org?format=json");
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    return data.ip;
  } catch (error) {
    console.error(
      "Error fetching IP address:",
      error instanceof Error ? error.message : String(error),
    );
    return null;
  }
};
