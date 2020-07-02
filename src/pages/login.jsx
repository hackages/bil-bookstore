import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../store/actions";

class _LoginScreen extends React.Component {
  state = {
    disabled: true,
    login: "davyengone",
    password: "dmafdkld",
  };

  save = (event) => {
    event.preventDefault();
    this.props.save(this.state.login);
  };

  reset = (event) => {
    event.preventDefault();
    this.setState({ login: "", password: "" });
    localStorage.clear();
  };

  render() {
    const { disabled, login, password } = this.state;
    return (
      <form>
        <h2>Login To Browse our shop! {this.props.login}</h2>
        <div className="control">
          <div>
            <label>Login: </label>
          </div>
          <input
            placeholder="your login..."
            value={login}
            onChange={(event) => this.setState({ login: event.target.value })}
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
        <button onClick={this.save}>Save</button>
        <button onClick={this.reset}>Reset</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.auth.login, // this.props.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    save: (login) => {
      // this.props.save
      dispatch(loginAction(login));
    },
  };
}

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LoginScreen);
