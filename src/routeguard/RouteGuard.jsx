import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router";

export default function RouteGuard({ children }) {
  const [cookie, setCookie, removeCookie] = useCookies();
  const isAuthenticated = cookie.admin; // Example authentication check

  return isAuthenticated ? children : <Navigate to="/login" />;
}
