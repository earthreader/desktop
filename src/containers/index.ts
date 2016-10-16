import { Dispatch as ReduxDispatch } from '@types/redux';

import { Action } from '../actions';


export type Dispatch = ReduxDispatch<Action>;

export interface DispatchProps {
    dispatch: Dispatch;
}

export type Container<P> = ((props: P & DispatchProps) => JSX.Element);
