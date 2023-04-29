export function DisplayItems({ item, name }) {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {item.map(({ name, price }) => (
          <li style={{ listStyle: "none", border: "solid", margin: "5px" }}>
            <p>NAME:{name} </p>
            <p>PRICE:INR {price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
