import React from "react";

export class LoginScreen extends React.Component {
  render() {
    return (
      <form>
        <h2>Login To Browse our shop!</h2>
        <div className="control">
          <div>
            <label>Login: </label>
          </div>
          <input placeholder="your login..." />
          <div className="errors">
            {/* <span>Login is required!</span> */}
            {/* <span>Login should be a valid email address</span> */}
          </div>
        </div>
        <div className="control">
          <div>
            <label>Password: </label>
          </div>
          <input type="password" placeholder="your password..." />
          <div className="errors">
            {/* <span>Password is required!</span>
                <span>Password should be at least 8 characters</span> */}
          </div>
        </div>
        <button>Save</button>
        <button>Reset</button>
      </form>
    );
  }
}
