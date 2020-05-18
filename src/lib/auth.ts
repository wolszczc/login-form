import { createContainer } from "unstated-next";
import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return { isAuthenticated, setIsAuthenticated };
};

export const {
  Provider: AuthProvider,
  useContainer: useAuthContainer,
} = createContainer(useAuth);
