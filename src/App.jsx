import Scene from "./components/Scene";
import HUD from "./components/HUD";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene />
      <HUD />
    </div>
  );
}

export default App;