import React, { Component } from 'react';

class QuoteContent extends Component {
    render() {
        return (
            <div>
                <h1 id="text"><i class="fas fa-quote-left"></i> {this.props.content.quote}</h1>
                <p id="author"> - {this.props.content.author}</p>
            </div>
        );
    }
}

export default QuoteContent;
