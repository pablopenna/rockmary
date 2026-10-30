import type { CSSProperties } from "react";
import styles from "../brainworm.module.css";

// Traces for the left half of a 500x1000 board, as [path, pulse delay in s, pulse duration in s]. Each runs in its own
// horizontal band, at least 50 units from its neighbours, so none overlap.
// The right half is the same set mirrored. Each half lives in its own panel beside the column.
const TRACES: [string, number, number][] = [
  ["M0 50 H140 L190 90 H360", 0, 7],
  ["M0 180 H80 L120 140 H300 L340 180 H440", 2.5, 8],
  ["M0 310 H100 L150 350 H400", 5, 9],
  ["M0 440 H180 L220 400 H340 L380 440 H470", 1, 7.5],
  ["M0 570 H60 L100 610 H230 L270 570 H420", 3.5, 8.5],
  ["M0 700 H150 L190 660 H320", 6, 9.5],
  ["M0 830 H90 L130 870 H300 L340 830 H460", 4, 8],
  ["M0 960 H200 L240 920 H380", 7, 7],
];

// Where traces end in a solder pad.
const PADS: [number, number][] = [
  [360, 90], [440, 180], [400, 350], [470, 440], [420, 570], [320, 660], [460, 830], [380, 920],
];

// Dim circuit traces with bright pulses running along them, in the margins either side of the column.
// The panels stop short of the column and fade out towards it, so nothing reaches or touches it.
export default function CircuitBackground() {
  const half = (
    <>
      {TRACES.map(([d, delay, duration], i) => (
        <g key={i}>
          <path className={styles.trace} d={d} />
          <path
            className={styles.pulse}
            d={d}
            pathLength={100}
            style={{ "--delay": `${delay}s`, "--duration": `${duration}s` } as CSSProperties}
          />
        </g>
      ))}
      {PADS.map(([cx, cy], i) => (
        <circle key={i} className={styles.pad} cx={cx} cy={cy} r={7} />
      ))}
    </>
  );

  const board = (
    <svg className={styles.circuitBoard} viewBox="0 0 500 1000" preserveAspectRatio="xMinYMid slice">
      {half}
    </svg>
  );

  return (
    <div aria-hidden="true">
      <div className={styles.circuit}>{board}</div>
      <div className={`${styles.circuit} ${styles.circuitRight}`}>{board}</div>
    </div>
  );
}
