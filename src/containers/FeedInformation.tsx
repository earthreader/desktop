import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';

import { selectFeed } from '../actions';
import { State } from '../reducers';
import { Feed } from '../datatypes';
import Navigation from '../components/Navigation';
import { Container } from '.';


interface Props {
    className?: string;
}

const FeedInformation: Container<Props> = ({ className, dispatch }) => (
    <div className={className}>
    </div>
);

export default connect(
    ({ subscription: { selected } }: State, ownProps: Props) => {
        return _.assign({}, ownProps);
    }
)(FeedInformation);
