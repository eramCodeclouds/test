import logo from "./logo.svg";
import "./App.css";
import { signInWithGoogle } from "./services/firebase";
function App() {
  return (
    <div className="App">
      <h1>Sign in With Google</h1>
      <button
        onClick={signInWithGoogle}
        type="button"
        class="login-with-google-btn"
      >
        Signin With Google
      </button>
      <h1>Google user name : {localStorage.getItem("user")}</h1>
      <h1>Google Email : {localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profile")} alt="" />

      <hr />
      <button type="button" class="loginBtn loginBtn--facebook">
        Sign in With Facebook
      </button>
    </div>
  );
}

export default App;
