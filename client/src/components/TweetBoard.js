import React from 'react';
import Tweet from './Tweet';
import Prototypes from 'prop-types';


class TweetBoard extends React.Component {

    render(){
        // return list of tweet components
        return this.props.tweets.map((tweet) => (
            <Tweet
                key={tweet.id}
                tweet={tweet}
            />
        ))
    }
}

TweetBoard.prototypes = {
    tweetboard: Prototypes.array.isRequired
}

export default TweetBoard;