import React, { useState } from "react";
import ItemList from "./ItemList.js";
import AddItem from "./AddItem.js"
import uuid from "react-uuid";

export default function Shop() {
  const [item, setItem] = useState({ name: "", desc: "" });
  const [items, setItems] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault();
    setItems([...items, { ...item, id: uuid() }]);
    setItem({ name: "", desc: "" });
  }

  function handleRemoveItem(item) {
    setItems(items.filter((i) => i.id !== item.id));
  }

  function handleAddItemName(event) {
    setItem({ ...item, name: event.target.value })
  }

  function handleAddItemDesc(event) {
    setItem({ ...item, desc: event.target.value })
  }

  return (
    <>
      <AddItem item={item} onFormSubmit={handleFormSubmit} onAddItemName={handleAddItemName} onAddItemDesc={handleAddItemDesc} />
      <ItemList items={items} onRemoveItem={handleRemoveItem} />
    </>
  );
}
