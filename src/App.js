import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Account from "./components/Account";
import Gifts from "./components/Gifts";
import Insights from "./components/Insights";
import Notifications from "./components/Notifications";
import BottomBar from "./components/BottomBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <BottomBar />
    </div>
  );
}

export default App;
