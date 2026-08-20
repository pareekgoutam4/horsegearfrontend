import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

// Wrap any <Route element={...}/> with this to require login.
// Pass adminOnly to also require role === "admin" (used for /admin/dashboard etc.)
function ProtectedRoute({ children, adminOnly = false }) {
  const user = getUser();

  if (!user) {
    alert("Please login first!");
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== "admin") {
    alert("Access Denied! Admin Only");
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default ProtectedRoute;
