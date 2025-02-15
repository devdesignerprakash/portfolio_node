import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token); // 🔹 Make `isLoggedIn` reactive

  const storeTokenInLS = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken); // 🔹 Update state when token changes
  };

  const LogOutUser = () => {
    setToken(null);
    setIsLoggedIn(false); 
    setUser(null)// 🔹 Update `isLoggedIn` state
    localStorage.removeItem("token");
  };

  // Fetch logged-in user details
  const userInfo = async () => {
    if (!token) return; // 🔹 Prevent API call if token is missing

    try {
      const response = await axios.get("http://localhost:8000/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) { // 🔹 Correct status check
        setUser(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      LogOutUser(); // 🔹 Auto-logout if token is invalid
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!token); // 🔹 Update `isLoggedIn` when `token` changes
    userInfo(); // 🔹 Re-fetch user info when token changes
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogOutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("You have used AuthContext outside the provider");
  }
  return authContextValue;
};
