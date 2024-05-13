import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { message } from "antd";

export const useLogin = () => {
  const { login } = useAuth(); // Ensure you call useAuth() to get the context values
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok) {
        message.success(data.message);
        login(data.token, data.user); // Use the login function
      } else {
        setError(data.message || "Failed to create an account");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to create an account");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};
