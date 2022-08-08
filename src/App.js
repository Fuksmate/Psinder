import "./styles/App.css";
import Card from "./components/card/card";
import Aside from "./components/aside";

function App() {
  return (
    <div className="App">
      <Aside />
      <main className="main">
        <Card />
      </main>
    </div>
  );
}

export default App;
