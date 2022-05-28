import "./App.css";
import pic from "./assets/img/bg1.png";
import email from "./assets/img/email.png";
import lock from "./assets/img/lock.png";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <img src={pic} style={{ width: "100%" }} />
      </div>
      <div className="rightside">
        <div className="rightside1">
          <h3>
            {" "}
            Welcome to Materialize!
            <br />
            <span className="fsmall">
              Please sign-in to your account and start the adventure
            </span>
          </h3>
          <div className="details">
            <p style={{ margin: "0px 0px 16px" }}>
              Admin: <span className="fweight">admin@materialize.com</span>/
              Pass: <span className="fweight">admin</span>
              <br />
              Client: <span className="fweight">client@materialize.com</span>/
              Pass: <span className="fweight">client</span>
            </p>
          </div>
          <div className="login-form">
            <form action="#" method="GET">
              <div className="form1 form-box ">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                ></input>
                <img src={email} className="icon" />
              </div>
              <div className="form1 form-box  clearfix ">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="off"
                  aria-label="Password"
                ></input>
                <img src={lock} className="icon" />
              </div>
              <div className="checkbox form1 clearfix ">
                <div className="form-check float-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember me"
                  />
                  <label className="form-check-label" for="remember me">
                    Remember me
                  </label>
                </div>
                <a href="#" className="link-light float-end forgot-password ">
                  Forget your password?
                </a>
              </div>
              <div className="form1 mb-0">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-theme"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <p className="create">
            New on our platform?
            <a href="#" className="thembo">
              {" "}
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
