import BarChart from "./components/BarChart";
import { barData } from "./data/data";
export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React + D3 Bar Chart</h1>
      <BarChart data={barData} />
    </div>
  );
}
