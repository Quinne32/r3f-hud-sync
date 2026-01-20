import { useSceneStore } from "../store/sceneStore";

function MeshItem({ name, position, geometry }) {
  const selectedObject = useSceneStore((state) => state.selectedObject);
  const selectObject = useSceneStore((state) => state.selectObject);

  const isSelected = selectedObject === name;

  return (
    <mesh
      position={position}
      onClick={() => selectObject(name)}
      scale={isSelected ? 1.5 : 1}
    >
      {geometry}
      <meshStandardMaterial
        color={isSelected ? "hotpink" : "orange"}
        wireframe={isSelected}
      />
    </mesh>
  );
}

export default MeshItem;