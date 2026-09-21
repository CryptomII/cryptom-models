import { Moment } from "./moment.model";

/**
 * Represents the labeling of a trading moment, including entry, stop, and target reach times.
 */
export interface MomentLabel {
  openTime: number; // same as the anchor Moment's openTime (unique key)
  entry: number; // close of the anchor = entry price
  scannedUntil: number; // openTime of the last 5m candle already scanned (the job resumes from here)
  stopAt: number | null; // 1º 5m candle low <= entry * 0.95
  reach5At: number | null; // 1º 5m candle high >= entry * 1.05
  reach10At: number | null;
  reach20At: number | null;
  reach30At: number | null;
  reach40At: number | null;
  reach50At: number | null;
  mfePct: number; // best high vs entry (%) BEFORE the stop candle
  ambiguous?: boolean; // the stop candle also touched an open target (counts as a loss)
}

export const LABEL_TARGETS = [5, 10, 20, 30, 40, 50] as const;
export type LabelTarget = (typeof LABEL_TARGETS)[number];
export type Outcome = "win" | "loss" | "pending";

/** What the API sends: no join key, no worker bookkeeping. */
export type PublicLabel = Omit<
  MomentLabel,
  "openTime" | "closeTime" | "scannedUntil"
>;

export type MomentWithLabel = Moment & { label: PublicLabel | null };

/**
 * Same rule for API and UI: a target reached before any stop is a win even while the
 * label is still open; a tie on the same candle (stopAt === reachAt) is a loss.
 */
export function resolveOutcome(
  label:
    | Pick<MomentLabel, "stopAt" | `reach${LabelTarget}At`>
    | null
    | undefined,
  target: LabelTarget,
): Outcome {
  if (!label) return "pending";
  const stopAt = label.stopAt ?? null;
  const reachAt = label[`reach${target}At` as const] ?? null;

  if (reachAt !== null && (stopAt === null || reachAt < stopAt)) return "win";
  if (stopAt !== null) return "loss";
  return "pending";
}
