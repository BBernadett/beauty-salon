import React from "react";
import "./submenu.css";

function Sublist(props) {
  const sub_items = props.sub_items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <ul className="sub_list">{sub_items}</ul>
    </div>
  );
}

function Submenu() {
  const sub_menu_items = ["Fodrászat", "Kozmetika", "Műköröm"];

  return <Sublist sub_items={sub_menu_items} />;
}

export default Submenu;
