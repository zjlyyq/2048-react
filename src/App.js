import "./styles.css";
import VisiableBoard from "./components/VisiableBoard";
import VisiableInfo from "./components/VisiableInfo";

export default function App() {
  return (
    <div className="App">
      <VisiableInfo />
      <VisiableBoard />
    </div>
  );
}
