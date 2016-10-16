import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import * as createLogger from 'redux-logger';

import './global.styl';
import { updateFeeds } from './actions';
import { State, default as rootReducer } from './reducers';
import App from './containers/App';

const logger = createLogger();
const store = createStore<State>(rootReducer, applyMiddleware(logger));

store.dispatch(updateFeeds([
    { type: 'subscription', label: 'a' },
    { type: 'subscription', label: 'b' },
    { type: 'category',
      label: 'c',
      children: [
        { type: 'subscription', label: 'd' }
      ]
    }
]));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
