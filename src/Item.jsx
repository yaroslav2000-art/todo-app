export default function Item({ item, onPack, onDelete }) {
  const { id, title, quantity, packed } = item;
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
      <input onChange={() => onPack(id)} type="checkbox" checked={packed} />
      <li>
        {quantity} {title}
      </li>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  );
}
