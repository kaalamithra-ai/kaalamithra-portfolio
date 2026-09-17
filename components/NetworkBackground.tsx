/**
 * Subtle AI-inspired background: connected node network + soft glow.
 * Purely decorative, hidden from screen readers, no animation cost.
 */
export default function NetworkBackground({ tone = "light" }: { tone?: "light" | "dark" }) {
  const stroke = tone === "light" ? "#2563EB" : "#7DD3FC";
  const node = tone === "light" ? "#7C3AED" : "#22D3EE";
  const nodes: Array<[number, number, number]> = [
    [60, 80, 3], [180, 40, 2], [300, 110, 4], [430, 60, 2], [560, 120, 3],
    [680, 50, 2], [120, 200, 2], [260, 240, 3], [420, 190, 2], [560, 250, 4],
    [700, 180, 2], [60, 320, 3], [220, 350, 2], [380, 310, 3], [540, 360, 2],
    [700, 320, 3],
  ];
  const links: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 2], [7, 8],
    [8, 4], [8, 9], [9, 10], [6, 11], [11, 12], [12, 13], [13, 8], [13, 14],
    [14, 9], [14, 15], [15, 10],
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl ${
          tone === "light" ? "bg-brand-blue/10" : "bg-brand-cyan/10"
        }`}
      />
      <div
        className={`absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl ${
          tone === "light" ? "bg-brand-purple/10" : "bg-brand-purple/20"
        }`}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 760 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke={stroke}
            strokeWidth="1"
          />
        ))}
        {nodes.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={node} />
        ))}
      </svg>
    </div>
  );
}
