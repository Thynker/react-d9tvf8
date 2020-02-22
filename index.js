import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Table from './TableForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',     
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>


        <Table name={this.state.Table} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
