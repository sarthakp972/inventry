// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ref, get } from "firebase/database";
// import { realtimeDB } from "../FirebaseConfig";
// import { Navbar, Nav, Container } from "react-bootstrap";

// const CategoryNavbar = () => {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const dbRef = ref(realtimeDB);
//       const snapshot = await get(dbRef);
//       if (snapshot.exists()) {
//         setCategories(Object.keys(snapshot.val()));
//       }
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">पटवा बर्तन भंडार</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {categories.map((category) => (
//               <Nav.Link key={category} onClick={() => navigate(`/category/${category}`)}>
//                 {category}
//               </Nav.Link>
//             ))}
//             <Nav.Link as={Link} to="/all-products">All Products g</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CategoryNavbar;
