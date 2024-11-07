import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>

      <p
        style={{
          fontSize: 11,
          color: "#f0f0f0",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        3D Model Canvas Loading
      </p>

      <p
        style={{
          fontSize: 16,
          color: "#f0f0f0",
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
