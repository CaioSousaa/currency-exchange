import { Route, Routes } from "react-router-dom";

import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home/";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
