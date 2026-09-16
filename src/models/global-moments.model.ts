import { Pairs, Periods } from './configs.model';
import { Moment } from './moment.model';

export type GlobalMoments = Map<Pairs, Map<Periods, Moment | undefined>>;
