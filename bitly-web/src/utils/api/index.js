const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getHealthData = async () => {
  try {
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (user) => {
  try {
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (user) => {
  try {
    const res = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
