import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      remainingChars: 140
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      remainingChars: --this.state.remainingChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}
         />
        <h3>Remaining Characters: {this.state.remainingChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
