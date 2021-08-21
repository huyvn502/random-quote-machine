import React, { Component } from 'react';
import QuoteContent from './QuoteContent';
import TweetQuote from './TweetQuote';
import $ from 'jquery'

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: {}
        }
        this.getRandomQuote = this.getRandomQuote.bind(this);
    }
    getRandomQuote() {
        $("#text").fadeOut("0.7s");
        $("#author").fadeOut("0.7s");
        const requestUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(requestUrl, {headers: { Accept: 'application/json'}})
        .then(response => response.json())
        .then((data) => {
            const indexRandom = Math.floor(Math.random() * 102);
            this.setState({currentQuote: data.quotes[indexRandom]});
        })
        .catch(error => console.log(error));
        this.props.changeThemeColor();
    }
    componentDidMount() {
        this.getRandomQuote();
    }
    componentDidUpdate() {
        $("#text").fadeIn("0.7s");
        $("#author").fadeIn("0.7s");
    }
    render() {
        return (
            <div id="quote-box">
                <QuoteContent content={this.state.currentQuote}></QuoteContent>
                <button id="new-quote" onClick={this.getRandomQuote}>New Quote</button>
                <TweetQuote content={this.state.currentQuote}></TweetQuote>
            </div>
        );
    }
}

export default QuoteBox;
