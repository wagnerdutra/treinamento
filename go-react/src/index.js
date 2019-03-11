import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './components/Button';

import './components/style.scss';

class App extends Component {
  state = {
    counter: 1,
  };

  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    return (
      <Fragment>
        <h1>Hello Wagner!</h1>
        <Button onClick={() => alert('click')} />
        <Button onClick={this.handleClick}>Teste</Button>
        <p>{counter}</p>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
