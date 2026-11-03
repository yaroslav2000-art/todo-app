//import { useState } from "react";

import { useState } from "react";
import HeaderSection from "./HeaderSection";
import InputSection from "./InputSection";
import ItemSection from "./ItemSection";
import ResultSection from "./ResultSection";
import "./App.css";

function FarAwayApp() {
  const [itemList, setItemList] = useState([]);

  function handleAddItem(newTitle, quantity) {
    setItemList((items) => [
      ...items,
      {
        id: crypto.randomUUID(),
        quantity: quantity,
        title: newTitle,
        packed: false,
      },
    ]);
  }

  function handlePackItem(id) {
    setItemList((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i)),
    );
  }
  function handleDeleteItem(id) {
    setItemList((items) => items.filter((i) => i.id !== id));
  }
  return (
    <div style={{ display: "grid", height: "100vh", alignItems: "center" }}>
      <HeaderSection />
      <InputSection onAdd={handleAddItem} />
      <ItemSection
        itemList={itemList}
        onPack={handlePackItem}
        onDelete={handleDeleteItem}
      />
      <ResultSection />
    </div>
  );
}

export default FarAwayApp;
