import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/" component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
