import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ref, get } from "firebase/database";
import { realtimeDB } from "../FirebaseConfig";
import { Container, Navbar, Nav } from "react-bootstrap";

const selectedCategories = [
  "Pital",
  "copper",
  "steel",
  "pooja_saman",
  "gift",
  "electronic",
  "aluminium",
  "cookware",
  "kanch_chhini",
  "kansa",
  "lakdi",
  "plastic",
  "nonstick",
  "home_discount_product",
  "home_vishesh_product",
];
const CustomNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const dbRef = ref(realtimeDB);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const fetchedCategories = Object.keys(snapshot.val());
        const filteredCategories = fetchedCategories.filter((cat) =>
          selectedCategories.includes(cat)
        );
        setCategories(filteredCategories);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top py-2">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-light">
          पटवा बर्तन भंडार (Inventory)
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-light fw-semibold">
              All Products
            </Nav.Link>
            {categories.map((category) => (
              <Nav.Link
                key={category}
                as={NavLink}
                to={`/category/${category}`}
                className="text-light fw-semibold"
              >
                {category.replace(/_/g, " ")}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
