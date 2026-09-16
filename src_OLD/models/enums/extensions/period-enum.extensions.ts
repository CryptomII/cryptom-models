import { PeriodEnum, PeriodEnumKeys } from '../period-enum'

// eslint-disable-next-line no-redeclare
export namespace PeriodEnumExtensions {
  const periodsTranslation: { [key in PeriodEnumKeys]: string } = {
    [PeriodEnum['1m']]: '1 minute',
    [PeriodEnum['5m']]: '5 minutes',
    [PeriodEnum['1h']]: '1 hour',
    [PeriodEnum['4h']]: '4 hours',
    [PeriodEnum['12h']]: '12 hours',
    [PeriodEnum['1d']]: '1 day',
    [PeriodEnum['1M']]: '1 month',
    [PeriodEnum['3M']]: '3 months',
    [PeriodEnum['1w']]: '1 week',
    [PeriodEnum['1y']]: '1 year',
  }

  export function translate(period: PeriodEnumKeys) {
    return periodsTranslation[period]
  }
}