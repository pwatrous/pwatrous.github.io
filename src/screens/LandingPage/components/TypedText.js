import React, { Component } from "react";
import Typed from 'typed.js';
import "./TypedText.scss";

class TypedText extends Component {
  componentDidMount() {
    const strings = [
      "Hi, I'm Patrick.",
      "I like making things in React."
    ]

    const formatStrings = (strings) => {
      return strings.map((string, index) => {
        if (index === 0) {
          return strings[index];
        }
        else return "^300" + strings[index];
      });
    };

    const options = {
      strings: formatStrings(strings),
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
      startDelay: 300,
      backDelay: 1200
    };

    this.typed = new Typed(this.span, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="typed-text-container">
        <span
          className="typed-text"
          style={{ whiteSpace: 'pre' }}
          ref={(span) => { this.span = span; }}
        />
      </div>
    );
  }
}

export default TypedText;