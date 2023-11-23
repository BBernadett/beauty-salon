import React from "react";
import "../submenu/submenu.css";

function SubPriceList(props) {
  const sub_price = props.sub_price.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <ul className="sub_list">{sub_price}</ul>
    </div>
  );
}

function SubPrice() {
  const sub_price_items = ["Fodrászat", "Kozmetika", "Műköröm"];

  return <SubPriceList sub_price={sub_price_items} />;
}

export default SubPrice;
