import PropertyListItem from "./PropertyListItem";
export default function PropertyList({ properties }) {
  return (
    <div>
      {properties.map((p) => {
        return <PropertyListItem key={p.id} {...p} />;
      })}
    </div>
  );
}
