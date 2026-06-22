import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [alphaSort, setAlphaSort] = useState(false)
  return (
    <div className="app">
      <Header alphaSort={alphaSort} setAlphaSort={setAlphaSort} />
      <ListingsContainer alphaSort={alphaSort} />
    </div>
  );
}

export default App;
