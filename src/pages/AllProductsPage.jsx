import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { realtimeDB } from "../FirebaseConfig";
import { Container, Card, Row, Col } from "react-bootstrap";

const AllProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const dbRef = ref(realtimeDB);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        let allItems = [];
        Object.values(snapshot.val()).forEach((category) => {
          allItems = [...allItems, ...Object.values(category)];
        });
        setAllProducts(allItems);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <Container>
      <h2 className="my-3">All Products</h2>
      <Row>
        {allProducts.map(({ id, Title, Price, images }) => (
          <Col key={id} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={images?.main} />
              <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>Price: ₹{Price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllProductsPage;
