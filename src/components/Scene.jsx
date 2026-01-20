import { Canvas } from "@react-three/fiber";
import MeshItem from "./MeshItem";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 6]}}>
     
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 2]} intensity={1} />

     
      <MeshItem
        name="Cube"
        position={[-2, 0, 0]}
        geometry={<boxGeometry args={[1, 1, 1]} />}
      />

      <MeshItem
        name="Sphere"
        position={[0, 0, 0]}
        geometry={<sphereGeometry args={[0.8, 32, 32]} />}
      />

      <MeshItem
        name="Torus"
        position={[2, 0, 0]}
        geometry={<torusGeometry args={[0.6, 0.2, 16, 32]} />}
      />
    </Canvas>
  );
}

export default Scene;