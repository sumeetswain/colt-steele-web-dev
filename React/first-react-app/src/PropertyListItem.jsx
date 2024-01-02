export default function PropertyListItem({ name, rating, price, id }) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{rating}</h2>
    </div>
  );
}
