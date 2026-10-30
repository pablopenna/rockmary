import type { CSSProperties } from "react";
import styles from "../brainworm.module.css";

// Pin offsets along one side of the chip body.
const PINS = [-35, -21, -7, 7, 21, 35];
const BODY = 50;

// One pin and its trace, drawn for the bottom side (y grows outward) and rotated for the others.
// Outer pins fan out on a 45° bend; the traces end in a solder pad.
function trace(offset: number) {
  const bend = Math.sign(offset) * 10;
  const end = offset + bend;
  return { d: `M${offset} ${BODY} V74 L${end} ${84} V96`, padX: end };
}

// A square chip body behind the logo, with pins and circuit traces running out of every side.
export default function CircuitChip() {
  return (
    <svg className={styles.chip} viewBox="-100 -100 200 200" aria-hidden="true">
      <rect className={styles.chipBody} x={-BODY} y={-BODY} width={BODY * 2} height={BODY * 2} rx={6} />
      <circle className={styles.chipPad} cx={-BODY + 6} cy={-BODY + 6} r={2.4} />
      {[0, 90, 180, 270].map((side) => (
        <g key={side} transform={`rotate(${side})`}>
          {PINS.map((offset, i) => {
            const { d, padX } = trace(offset);
            const n = (side / 90) * PINS.length + i;
            return (
              <g key={offset}>
                <path className={styles.chipTrace} d={d} />
                <path
                  className={styles.chipPulse}
                  d={d}
                  pathLength={100}
                  style={{ "--delay": `${(n * 1.3) % 7}s`, "--duration": `${4 + (n % 3)}s` } as CSSProperties}
                />
                <circle className={styles.chipPad} cx={padX} cy={96} r={2.4} />
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}
