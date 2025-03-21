import React from "react";
import { Routes, Route } from "react-router-dom"; 
import CustomNavbar from "./Components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import AllProductsPage from "./pages/AllProductsPage";
import AddPage from "./pages/AddPage";
import UpdateProduct from "./pages/UpdateProduct"; // ✅ Import UpdateProduct
import CommonInfoPage from "./pages/CommonInfoPage";
// import CustomNavbar2 from "./Components/MainNavbar";

function App() {
  return (
    <>
    {/* <CustomNavbar2/> */}
      <CustomNavbar />
      <CommonInfoPage/>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/add-product/:categoryName" element={<AddPage />} />
        <Route path="/update/:categoryName/:id" element={<UpdateProduct />} /> {/* ✅ Added Update Route */}
       
      </Routes>
    </>
  );
}

export default App;
