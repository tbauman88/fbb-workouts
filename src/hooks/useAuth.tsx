import { createContext, useState, useContext } from "react";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: (password: string) => boolean;
}>({ isAuthenticated: false, login: () => false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (password: string) => {
    if (
      password === import.meta.env.VITE_GUEST_PASSWORD ||
      password === import.meta.env.VITE_AUTH_PASSWORD
    ) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
