import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <h3 className="appTitle">List of Components</h3>
        <div>
          <span>Button:</span>&nbsp;&nbsp;
          <Link to="/button-demo" className="appLink">Demo</Link>&nbsp;&nbsp;
          <Link to="/button-preview" className="appLink">Preview</Link>
        </div>
        <br /><br />
        <a className="externalLink" href="https://github.com/baadal/baadal-ui">GitHub repo</a>
        <a className="externalLink" href="https://www.npmjs.com/package/@baadal-sdk/baadal-ui">NPM package</a>
      </header>
    </div>
  );
}

export default App;
