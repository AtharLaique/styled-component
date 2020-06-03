import React from "react";
function App() {
  return (
    <div className="App">
      <br />
      <h3 className="text-center">How to Style React Component</h3>
      <br />
      <div className="container">
        <p>There are four different options to style React components.</p>
        <ul style={{ listStyle: "decimal" }}>
          <li>Global CSS files</li>
          <li>Modular Stylesheets</li>
          <li>Stylized Components</li>
          <li>Javascript Stylesheets</li>
        </ul>
      </div>
    </div>
  );
}
export default App;
