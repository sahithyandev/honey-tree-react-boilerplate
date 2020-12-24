import * as React from "react";
import * as ReactDOM from "react-dom";

// Import CSS like this
import "./style/main.css";

// Import PNG like this
import logo from "./assets/logo.png";

// Import SVG like this
// import logo from "./assets/logo.svg";

export const App = () => {
  // const;

  return (
    <div>
      <img src={logo} className="logo rotate" />
      <h2>Hi!</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
