"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LABEL_TARGETS = void 0;
exports.resolveOutcome = resolveOutcome;
exports.LABEL_TARGETS = [5, 10, 20, 30, 40, 50];
/**
 * Same rule for API and UI: a target reached before any stop is a win even while the
 * label is still open; a tie on the same candle (stopAt === reachAt) is a loss.
 */
function resolveOutcome(label, target) {
    if (!label)
        return "pending";
    const stopAt = label.stopAt ?? null;
    const reachAt = label[`reach${target}At`] ?? null;
    if (reachAt !== null && (stopAt === null || reachAt < stopAt))
        return "win";
    if (stopAt !== null)
        return "loss";
    return "pending";
}
//# sourceMappingURL=moment-label.model.js.map