import { useState } from "react";
export default function InputSection({ onAdd }) {
  const [titleInput, setTitleInput] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAdd(titleInput, quantity) {
    onAdd(titleInput, quantity);
    setTitleInput("");
    setQuantity(1);
  }

  return (
    <div>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
      <input
        onChange={(e) => setTitleInput(e.target.value)}
        placeholder="your item"
        value={titleInput}
      />
      <button onClick={() => handleAdd(titleInput, quantity)}>Add</button>
    </div>
  );
}
