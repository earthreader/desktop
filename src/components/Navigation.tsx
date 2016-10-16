import * as classnames from 'classnames';
import * as React from 'react';

import { State } from '../reducers';
import { Feed } from '../datatypes';

const Icon = require('../images/noun_633940_cc.svg');
const style = require('./Navigation.styl');

const title = 'Earth Reader';


interface Props {
    feeds: Feed[];
    selectedFeed: string[];
    className?: string;
    onSelected?: (path: string[]) => void;
}

export default class Navigation extends React.Component<Props, {}> {
    render() {
        const { className, feeds, selectedFeed } = this.props;
        return (
            <nav className={classnames(style.navigation, className)}>
                <header>
                    <h1>{title}</h1>
                </header>
                <FeedList
                    feeds={feeds}
                    selectedFeed={selectedFeed}
                    pathPrefix={[]}
                    onSelected={this.handleSelect.bind(this)}
                />
            </nav>
        );
    }

    handleSelect(path: string[]) {
        this.props.onSelected && this.props.onSelected(path);
    }
}

interface FeedListProps {
    feeds: Feed[];
    pathPrefix: string[];
    selectedFeed: string[];
    onSelected?: (path: string[]) => void;
}

const FeedList: (props: FeedListProps) => JSX.Element = ({ feeds, pathPrefix, selectedFeed, onSelected }) => <ol>
    {feeds.map((e, i) => {
        const path = pathPrefix.concat([e.label]);
        const handleClick = () => onSelected && onSelected(path);
        switch (e.type) {
        case 'category':
            return <li key={i}>
                <FeedItem label={e.label} selected={_.isEqual(path, selectedFeed)} onClick={handleClick} />
                <FeedList
                    feeds={e.children}
                    pathPrefix={path}
                    selectedFeed={selectedFeed}
                    onSelected={onSelected}
                />
            </li>;
        case 'subscription':
            return <li key={i}>
                <FeedItem label={e.label} selected={_.isEqual(path, selectedFeed)} onClick={handleClick} />
            </li>;
        }
    })}
</ol>;

interface FeedItemProps {
    label: string;
    selected: boolean;
    onClick?: () => void;
}

const FeedItem: (props: FeedItemProps) => JSX.Element = ({ label, selected, onClick }) => (
    <div className={classnames(style.feedItem, { [style.selected]: selected })} onClick={onClick}>
        <Icon />{label}
    </div>
);
