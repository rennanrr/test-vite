import { Route, BrowserRouter, Routes } from "react-router-dom";
import Feed from "./pages/Feed";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
