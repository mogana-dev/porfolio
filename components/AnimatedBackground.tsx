export default function AnimatedBackground({ variant = "default" }: { variant?: "default" | "subtle" }) {
  return (
    <div className={`absolute inset-0 bg-node-grid ${variant === "subtle" ? "opacity-15" : "opacity-25"}`} />
  );
}
