/**
 * Represents the labeling of a trading moment, including entry, stop, and target reach times.
 */
export interface MomentLabel {
    openTime: number;
    entry: number;
    scannedUntil: number;
    stopAt: number | null;
    reach5At: number | null;
    reach10At: number | null;
    reach20At: number | null;
    reach30At: number | null;
    reach40At: number | null;
    reach50At: number | null;
    mfePct: number;
    ambiguous?: boolean;
}
//# sourceMappingURL=moment-label.model.d.ts.map