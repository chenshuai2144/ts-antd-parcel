import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
/**
 * 入口app
 * @class App
 * @extends {React.PureComponent<{}, {}>}
 */
class App extends React.PureComponent<{}, {}> {
  render() {
    return <div className="main">这里是个demo</div>;
  }
}

ReactDOM.render(
  <div className="container">
    <App />
  </div>,
  document.getElementById('root'),
);
