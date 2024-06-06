import React from "react";

import { GlobalStyles } from "./styles/Globalstyles";

import { Header } from "./components/Header/Header";

import { ProductsList } from "./components/ProductsList/ProductsList";

function App() {
  return (
    <>
      <Header />
      <ProductsList />
      <GlobalStyles />
    </>
  );
}

export default App;
