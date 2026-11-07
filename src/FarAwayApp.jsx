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
        createdDate: Date.now(),
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

  // function handleSort(sortBy) {
  //   let copy = [...itemList];

  //   switch (sortBy) {
  //     case "Input Order":
  //       copy.sort((a, b) => a.createdDate - b.createdDate);
  //       break;

  //     case "Description":
  //       copy.sort((a, b) => a.title.localeCompare(b.title));
  //       break;

  //     case "Packed Status":
  //       copy.sort((a, b) => b.packed - a.packed);
  //       break;

  //     default:
  //       copy;
  //   }

  //   setItemList(copy);
  // }

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
