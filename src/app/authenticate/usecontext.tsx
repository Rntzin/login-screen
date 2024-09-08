import React, { createContext, useState, useContext, ReactNode } from "react";

interface UserContextType {
  email: string | null;
  setUserEmail: (email: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(null);

  const setUserEmail = (newEmail: string | null) => {
    setEmail(newEmail);
  };

  return (
    <UserContext.Provider value={{ email, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
