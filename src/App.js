import { DisplayItems } from "./DisplayItems";
import { fruits, phones } from "./fruits";
import "./styles.css";

export default function App() {
  console.log(phones);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <DisplayItems item={fruits} name={"Fruits"} />
      </div>
      <div>
        <DisplayItems item={phones} name={"phones"} />
      </div>
    </div>
  );
}
