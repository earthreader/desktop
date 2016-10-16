import { Feed } from '../datatypes';


export interface UpdateFeeds {
    type: 'UpdateFeeds';
    payload: {
        feeds: Feed[];
    }
}

export function updateFeeds(feeds: Feed[]): UpdateFeeds {
    return {
        type: 'UpdateFeeds',
        payload: { feeds }
    }
}

export interface SelectFeed {
    type: 'SelectFeed';
    payload: {
        path: string[];
    };
}

export function selectFeed(path: string[]): SelectFeed {
    return {
        type: 'SelectFeed',
        payload: { path }
    }
}

export type Action = UpdateFeeds | SelectFeed;
