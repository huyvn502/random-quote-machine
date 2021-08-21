import React, { Component } from 'react';

class TweetQuote extends Component {
    render() {
        const contentTweet = `"${this.props.content.quote}" ${this.props.content.author} #quotes`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(contentTweet)}`;
        const faceUrl = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhuyvn502.github.io%2Frandom-quote-machine%2F&amp;src=sdkpreparse";
        return (
            <div id="share-button">
                <a id="tweet-quote" href={tweetUrl} target="_blank"><i className="fab fa-twitter"></i></a>
                <a id="status-quote" href={faceUrl} target="_blank"><i className="fab fa-facebook-f"></i></a>
            </div>
        );
    }
}

export default TweetQuote;
