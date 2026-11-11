import { useState } from "react";
import Item from "./Item";
export default function ItemSection({ itemList, onPack, onDelete, onClear }) {
  const [sortBy, setSortBy] = useState("Input Order");

  let sortedItems;

  if (sortBy === "Input Order") {
    sortedItems = itemList;
  }

  if (sortBy === "Description") {
    sortedItems = itemList
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "Packed Status") {
    sortedItems = itemList
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div>
      <ItemList itemList={sortedItems} onPack={onPack} onDelete={onDelete} />
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Input Order">Sort by input order</option>
          <option value="Description">Sort by description</option>
          <option value="Packed Status">Sort by packed status</option>
        </select>
        <button onClick={() => onClear()}>Clear list</button>
      </div>
    </div>
  );
}
function ItemList({ itemList, onPack, onDelete }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {itemList.map((item) => (
        <Item item={item} key={item.id} onPack={onPack} onDelete={onDelete} />
      ))}
    </ul>
  );
}
