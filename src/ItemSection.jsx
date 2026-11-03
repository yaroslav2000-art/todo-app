import Item from "./Item";
export default function ItemSection({ itemList, onPack, onDelete }) {
  return (
    <div>
      <ItemList itemList={itemList} onPack={onPack} onDelete={onDelete} />
      <div>
        <button>Sort by input order</button>
        <button>Clear list</button>
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
