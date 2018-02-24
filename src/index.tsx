import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'antd';
import './index.css';

/**
 * 入口app
 * @class App
 * @extends {React.PureComponent<{}, {}>}
 */
class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className="main">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <div className="container">
    <App />
  </div>,
  document.getElementById('root'),
);
