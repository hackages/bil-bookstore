import React from "react";

export class LoginScreen extends React.Component {
  state = {
    disabled: true,
    login: "davyengone",
    password: "mlerjeazkfjksmdqj897P",
  };

  componentDidUpdate() {
    console.log("", this.state);
    if (this.state.disabled && this.state.login && this.state.password) {
      this.setState({ disabled: false });
    }
  }
  render() {
    const { disabled, login, password } = this.state;
    return (
      <form>
        <h2>Login To Browse our shop!</h2>
        <div className="control">
          <div>
            <label>Login: </label>
          </div>
          <input
            placeholder="your login..."
            value={login}
            onChange={(event) =>
              this.setState((state) => {
                return { login: event.target.value };
              })
            }
          />
          <div className="errors">
            {/* <span>Login is required!</span> */}
            {/* <span>Login should be a valid email address</span> */}
          </div>
        </div>
        <div className="control">
          <div>
            <label>Password: </label>
          </div>
          <input
            placeholder="your password..."
            type="password"
            value={password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <div className="errors">
            {/* <span>Password is required!</span>
                <span>Password should be at least 8 characters</span> */}
          </div>
        </div>
        <button disabled={disabled}>Save</button>
        <button>Reset</button>
      </form>
    );
  }
}
