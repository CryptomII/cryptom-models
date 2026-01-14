
export const PairEnum = {
  btcusdt: 'btcusdt',
  ltcusdt: 'ltcusdt',
  ethusdt: 'ethusdt',
  bnbusdt: 'bnbusdt',
  dotusdt: 'dotusdt',
  enjusdt: 'enjusdt',
  adausdt: 'adausdt',
  chzusdt: 'chzusdt',
  bchusdt: 'bchusdt',
  xmrusdt: 'xmrusdt',
  xrpusdt: 'xrpusdt',
  dogeusdt: 'dogeusdt',
  linkusdt: 'linkusdt',
  aaveusdt: 'aaveusdt',
  cakeusdt: 'cakeusdt',
  lunausdt: 'lunausdt',
  solusdt: 'solusdt',
  axsusdt: 'axsusdt',
  aliceusdt: 'aliceusdt',
} as const

export type PairEnumKeys = keyof typeof PairEnum

export type PairEnumKeysUpperCased = Uppercase<PairEnumKeys>