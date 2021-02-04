import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@DeckSorvesan:token");
    const user = localStorage.getItem("@DeckSorvesan:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("signin", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@DeckSorvesan:token", token);
    localStorage.setItem("@DeckSorvesan:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@DeckSorvesan:token");
    localStorage.removeItem("@DeckSorvesan:user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado por dentro de um AuthProvider");
  }

  return context;
}
