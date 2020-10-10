import React from "react";
import Product from "../Components/Product";
import products from "../products";
import { Row, Col } from "react-bootstrap";

const Home = () => {
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
