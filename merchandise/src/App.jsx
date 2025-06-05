import { useState } from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Header from "./components/body/Body";
import Picks from "./components/picks/Picks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
      <Picks />
    </>
  );
}

export default App;
