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
