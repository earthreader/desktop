import * as _ from 'lodash';

import { Action } from '../actions';
import { Feed, Subscription } from '../datatypes';
import { createReducer } from './util';


export interface State {
    items: Feed[];
    selected: null | {
        path: string[];
        item: Feed;
    };
}

function findSubscription(items: Feed[], path: string[]): Feed | null {
    for (let p of path.slice(0, -1)) {
        const i = _.find(items, e => e.label === p);
        if (i && i.type === 'category') {
            items = i.children;
        } else {
            return null;
        }
    }
    const item = _.find(items, e => e.label === path[path.length - 1]);
    if (item) {
        return item;
    } else {
        return null;
    }
}

function feeds(state: State = { items: [], selected: null }, action: Action): State {
    switch (action.type) {
    case 'UpdateFeeds':
        return _.assign({}, state, {
            items: action.payload.feeds,
            selected: null
        });
    case 'SelectFeed':
        const { path } = action.payload;
        const item = findSubscription(state.items, path);
        if (item !== null) {
            return _.assign({}, state, {
                selected: { path, item }
            });
        } else {
            return _.assign({}, state, { selected: null });
        }
    default:
        return state;
    }
};

export default feeds;
