import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

const Home = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  // Extract data from state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Loads data after the page loads
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h1>New Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varian="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
