import { useSceneStore } from "../store/sceneStore";

function HUD() {
  const selectedObject = useSceneStore((state) => state.selectedObject);
  const interactionLog = useSceneStore((state) => state.interactionLog);
  const resetScene = useSceneStore((state) => state.resetScene);

  return (
    <div style={styles.hud}>
      <h3>Interaction Log</h3>
      <p>Selected Object: {selectedObject || "None"}</p>
      <p>Total Interactions: {interactionLog.length}</p>

      <button onClick={resetScene}>Reset</button>
    </div>
  );
}

const styles = {
  hud: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: "12px",
    background: "rgba(0,0,0,0.7)",
    color: "#fff",
    borderRadius: "6px",
  },
};

export default HUD;