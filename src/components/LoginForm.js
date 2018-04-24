import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = ({
      username: '',
      password: ''
    });
  }

  nameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password

    if (username!=='' && password!==''){
      this.props.onSubmit({username, password})
    }
  }

  render() {
    return (
      // <form
      //   onSubmit={
      //     if (this.state.username==='' || this.state.password===''){
      //       this.props.onSubmit()
      //     }
      //   }
      // >
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input onChange={this.nameChange} id="test-username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.passwordChange} id="test-password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button onClick={this.props.submitHandler} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
