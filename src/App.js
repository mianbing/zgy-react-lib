import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text={'组件按钮'}></Button>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

