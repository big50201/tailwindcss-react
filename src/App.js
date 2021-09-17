import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import List from "./pages/list";
import Category from "./pages/category";
import Footer from "./components/Footer";
import DropDown from "./components/DropDown";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <NavBar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list" exact component={List} />
        <Route path="/category" exact component={Category} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
