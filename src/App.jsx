import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/dashboard/SharedLayout";
import ListOfItems from "./pages/dashboard/ListOfItems";
import ListOfBrends from "./pages/dashboard/ListOfBrends";
import ListOfCategories from "./pages/dashboard/ListOfCategories";
import ListOfSubCategories from "./pages/dashboard/ListOfSubCategories";
import FormPage from "./pages/FormPage";
import LoginPage from "./pages/LoginaPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ListOfItems />} />
          <Route path="/brends" element={<ListOfBrends />} />
          <Route path="/categories" element={<ListOfCategories />} />
          <Route path="/subcategories" element={<ListOfSubCategories />} />
        </Route>
        <Route path="form" element={<FormPage />} />
        <Route path="Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
