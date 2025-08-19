// components/NoiseLayer.jsx
const NoiseLayer = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: "url('/noise.png')",
        backgroundRepeat: "repeat",
        opacity: 0.03, // adjust for subtlety
      }}
    />
  );
};

export default NoiseLayer;
