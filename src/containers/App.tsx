import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectFeed } from '../actions';
import FeedInformation from '../containers/FeedInformation';
import { State } from '../reducers';
import { Feed } from '../datatypes';
import Navigation from '../components/Navigation';
import { Container } from '.';

const style = require('./App.styl');


interface AppProps {
    feeds: Feed[];
    selectedFeed: string[];
}

const App: Container<AppProps> = ({ feeds, selectedFeed, dispatch }) => {
    return <div className={style.app}>
        <Navigation
            className={style.feeds}
            feeds={feeds}
            selectedFeed={selectedFeed}
            onSelected={path => dispatch(selectFeed(path))} />
        <FeedInformation className={style.feedInformation} />
        <div className={style.main}>{selectedFeed}</div>
    </div>;
};

export default connect(
    ({ subscription: { items: feeds, selected } }: State) => {
        let selectedFeed: string[] = [];
        if (selected) {
            selectedFeed = selected.path;
        }
        return { feeds, selectedFeed };
    }
)(App);
