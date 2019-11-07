import React, { Component } from 'react'
import './QuoteBox.css'

class QuoteBox extends Component {
    render() {

        //Set the background color of the HTML element to the random color that is passed in as a prop
        const html = document.documentElement;
        html.style.background = this.props.color;

        return (
            <div style={{ backgroundColor: 'white' }} className="QuoteBox fadeIn">
                <h1 className="QuoteBox-quote" style={{ color: this.props.color }}>{this.props.quote}</h1>

                <h4 style={{ color: this.props.color }} className="QuoteBox-author fadeIn">
                    -{this.props.author !== '' ? this.props.author : 'Unknown'}-
                </h4>

                <button
                    style={{ backgroundColor: this.props.color }} onClick={this.handleClick} className="QuoteBox-button">
                    New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;