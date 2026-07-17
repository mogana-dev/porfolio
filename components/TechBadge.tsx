export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="text-xs rounded-full border border-line bg-panel2 px-3 py-1 text-dim">
      {label}
    </span>
  );
}
