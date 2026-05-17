import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {

      const token = localStorage.getItem("token");

      if (!token) return;

      try {

        const response = await axios.get(
          "http://localhost:5000/me",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);
        setUser(response.data);

      } catch (error) {

        console.log(error.response);

      }

    };

    fetchUser();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;