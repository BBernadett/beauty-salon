import React, { useState } from "react";
import logo from "../../img/bs-logo.png";
import "./home.css";
import Submenu from "../submenu/submenu.js";
import SubPrice from "../price/subPriceList.js";
import Content from "../content/content.js";

function List(props) {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = (index) => {
    setHighlightedIndex(index);
    if (index === 1) {
      setShowSubmenu(true);
    }
  };

  const handleMouseLeave = () => {
    setHighlightedIndex(null);
    setShowSubmenu(false);
  };

  const items = props.items.map((item, index) => (
    <li
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      style={{
        color: index === highlightedIndex ? "#6B402B" : "#b28051",
      }}
    >
      {item}
      {index === 1 && highlightedIndex === 1 && (
        <ul>
          <Submenu />
        </ul>
      )}{" "}
      {index === 2 && highlightedIndex === 2 && (
        <ul>
          <SubPrice />
        </ul>
      )}
    </li>
  ));

  return (
    <div>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul>{items}</ul>
        </nav>
      </header>
      <Content />
    </div>
  );
}

function Home() {
  const menu_items = ["Kezdőlap", "Szolgáltatásaink", "Árlista", "Kapcsolat"];

  return <List items={menu_items} />;
}

export default Home;
