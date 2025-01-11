import { createContext, useState, useContext } from "react";
import { AuthContextType } from "../types";

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {}
});

const TWELVE_HOURS = 12 * 60 * 60 * 1000;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const getStoredAuth = () => {
    const stored = localStorage.getItem("auth");
    if (!stored) return null;

    const { expiry } = JSON.parse(stored);

    if (Date.now() > expiry) {
      localStorage.removeItem("auth");
      return null;
    }

    return true;
  };

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!getStoredAuth()
  );

  const login = async (password: string) => {
    if (password === import.meta.env.VITE_AUTH_PASSWORD) {
      const authData = { expiry: Date.now() + TWELVE_HOURS };

      localStorage.setItem("auth", JSON.stringify(authData));
      setIsAuthenticated(true);
      return true;
    }
    throw new Error("Invalid password");
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
