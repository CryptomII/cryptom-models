import { Moment } from "./moment.model";
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
export declare const LABEL_TARGETS: readonly [5, 10, 20, 30, 40, 50];
export type LabelTarget = (typeof LABEL_TARGETS)[number];
export type Outcome = "win" | "loss" | "pending";
/** What the API sends: no join key, no worker bookkeeping. */
export type PublicLabel = Omit<MomentLabel, "openTime" | "closeTime" | "scannedUntil">;
export type MomentWithLabel = Moment & {
    label: PublicLabel | null;
};
/**
 * Same rule for API and UI: a target reached before any stop is a win even while the
 * label is still open; a tie on the same candle (stopAt === reachAt) is a loss.
 */
export declare function resolveOutcome(label: Pick<MomentLabel, "stopAt" | `reach${LabelTarget}At`> | null | undefined, target: LabelTarget): Outcome;
//# sourceMappingURL=moment-label.model.d.ts.map