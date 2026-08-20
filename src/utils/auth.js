

export function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export function isLoggedIn() {
  return !!getUser();
}

export function isAdmin() {
  const user = getUser();
  return !!user && user.role === "admin";
}

export function logoutUser() {
  localStorage.removeItem("user");
}


export function requireLogin(navigate, redirectPath = "/") {
  localStorage.setItem("redirectAfterLogin", redirectPath);
  alert("Please login or signup first to continue!");
  navigate("/login");
}
