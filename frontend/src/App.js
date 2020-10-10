import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
