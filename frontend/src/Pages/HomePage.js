import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  // Loads data after the page loads
  useEffect(() => {
    const fetchProducts = async () => {
      // Use destructuring to extract data from response(res)
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>New Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
