import type { Metadata } from "next";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import CircuitBackground from "./_components/CircuitBackground";
import CircuitChip from "./_components/CircuitChip";
import CautionTape from "./_components/CautionTape";
import { monogram } from "./fonts";
import styles from "./brainworm.module.css";

export const metadata: Metadata = {
  title: "Brainworm",
  description: "Brainworm - work in progress. Soon™.",
  icons: { icon: withBasePath("/bw/bwi-favicon.png") },
};

// Tape positions follow the concept sketch: centre (x%, y%), length (% of stage width), angle.
// They overshoot the stage so their ends are cut off by the column edges, even on tall phones.
const TAPES = [
  { x: 44.4, y: -6.85, length: 149, angle: -46.2 },
  { x: 51.4, y: 40.3, length: 129, angle: 27.2 },
  { x: 50, y: 62, length: 135, angle: -29.7 },
  { x: 40, y: 86.25, length: 155, angle: -27.9 },
];

export default function BrainwormPage() {
  return (
    <main lang="en" className={`${monogram.variable} ${styles.page}`}>
      <CircuitBackground />
      <div className={styles.column}>
        <div className={styles.stage}>
          <CircuitChip />
          {/* Tapes first so the logo and text are painted on top of them. */}
          {TAPES.map((tape, i) => (
            <CautionTape key={i} {...tape} />
          ))}
          <Image className={styles.logo} src={withBasePath("/bw/bw1b.png")} alt="Brainworm logo" width={100} height={70} />
          <h1 className={styles.title}>BRAINWORM</h1>
          <p className={styles.soon}>
            Soon<sup>™</sup>
          </p>
        </div>
      </div>
    </main>
  );
}
