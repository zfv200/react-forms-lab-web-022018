import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      notValid: true
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
    let lined = event.target.value.split(/\n/g)
    if (lined.length===3){
      if (lined[0].slice(0, -1).split(" ").length===5 && lined[1].slice(0, -1).split(" ").length===3 && lined[2].slice(0, -1).split(" ").length===5){
        this.setState({
          notValid: false
        })
      } else {
        this.setState({
          notValid: true
        })
      }
    } else{
      this.setState({
        notValid: true
      })
    }

    // if (lined.length!==3 && lined[0].split(" ").length!==5 && lined[1].split(" ").length!==3 && lined[3].split(" ").length!==5){
    //   console.log("hi")
    // }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} rows="3" cols="60" value={this.state.value}/>
      {this.state.notValid ?
        <div id="poem-validation-error" style={{color: "red"}}>
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
