import { combineReducers } from 'redux';
import { Reducer } from '@types/redux';

import {
    default as subscription,
    State as SubscriptionState
} from './subscription';

export interface State {
    subscription: SubscriptionState;
}

export default combineReducers<State>({
    subscription
});
