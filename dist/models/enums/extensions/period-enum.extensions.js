"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodEnumExtensions = void 0;
const period_enum_1 = require("../period-enum");
// eslint-disable-next-line no-redeclare
var PeriodEnumExtensions;
(function (PeriodEnumExtensions) {
    const periodsTranslation = {
        [period_enum_1.PeriodEnum['1m']]: '1 minute',
        [period_enum_1.PeriodEnum['5m']]: '5 minutes',
        [period_enum_1.PeriodEnum['1h']]: '1 hour',
        [period_enum_1.PeriodEnum['4h']]: '4 hours',
        [period_enum_1.PeriodEnum['12h']]: '12 hours',
        [period_enum_1.PeriodEnum['1d']]: '1 day',
        [period_enum_1.PeriodEnum['1M']]: '1 month',
        [period_enum_1.PeriodEnum['3M']]: '3 months',
        [period_enum_1.PeriodEnum['1w']]: '1 week',
        [period_enum_1.PeriodEnum['1y']]: '1 year',
    };
    function translate(period) {
        return periodsTranslation[period];
    }
    PeriodEnumExtensions.translate = translate;
})(PeriodEnumExtensions || (exports.PeriodEnumExtensions = PeriodEnumExtensions = {}));
//# sourceMappingURL=period-enum.extensions.js.map