export default function ResultSection({ itemList }) {
  const packedItems = itemList.filter((item) => item.packed);
  const percentage = (packedItems.length / itemList.length) * 100;
  return (
    <footer>
      <p>
        {packedItems.length === itemList.length
          ? "All items packed"
          : `You have ${itemList.length} items on your list, and you already packed
        ${packedItems.length} (${percentage}%)`}
      </p>
    </footer>
  );
}
