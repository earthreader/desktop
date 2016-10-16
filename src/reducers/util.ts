import { assign } from 'lodash';

import { Action } from '../actions';

type Reducer<S> = (state: S, action: Action) => S;

export function createReducer<S>(reducer: (s: S, a: Action) => S): Reducer<S> {
    return function (s, a) {
        return assign({}, s, reducer(s, a));
    };
}
