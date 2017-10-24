import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <ul>
        <li>Hello</li>
        <li>from</li>
        <li>React</li>
      </ul>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);




