export default function Slots({ v1, v2, v3 }) {
  return (
    <div>
      <h1>
        {v1} {v2} {v3}
      </h1>
      {v1 == v2 && v2 == v3 ? (
        <div>
            <h3 style={{ color: "green" }}>You Win!</h3> 
            <p>Congrats!!</p>
        </div>
      ) : (
        <h3 style={{ color: "red" }}>You Lose</h3>
      )}
      
    </div>
  );
}
