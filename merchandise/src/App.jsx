import { useState } from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Header from "./components/body/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

export default App;
