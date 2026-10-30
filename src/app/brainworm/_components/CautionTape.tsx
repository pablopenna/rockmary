import { Fragment, type CSSProperties } from "react";
import styles from "../brainworm.module.css";

interface CautionTapeProps {
  // Centre point as percentages of the stage width/height, length in % of the stage width, angle in degrees.
  x: number;
  y: number;
  length: number;
  angle: number;
}

// Roughly one "WIP" + marks pair per this much tape (in % of the stage width).
const SEGMENT_LENGTH = 22;

// A strip of yellow "work in progress" tape laid across the stage.
export default function CautionTape({ x, y, length, angle }: CautionTapeProps) {
  const style = {
    left: `${x}%`,
    top: `${y}%`,
    width: `${length}cqw`,
    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
  } as CSSProperties;
  const segments = Math.max(1, Math.round(length / SEGMENT_LENGTH));

  return (
    <div className={styles.tape} style={style} aria-hidden="true">
      <span className={styles.tapeMarks} />
      {Array.from({ length: segments }, (_, i) => (
        <Fragment key={i}>
          <span>WIP</span>
          <span className={styles.tapeMarks} />
        </Fragment>
      ))}
    </div>
  );
}
