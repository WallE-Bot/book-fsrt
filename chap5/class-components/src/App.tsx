import React from 'react';
import './App.css';
import Greeting from './Greeting';

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      enteredName: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
  }

  state: { enteredName: string }

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value
    });
  }

  render() {
    console.log('rendering App');

    return (
      <div className='App'>
        <input
          value={this.state.enteredName}
          onChange={this.onChangeName}
        />
        <Greeting name={this.state.enteredName} />
      </div>
    )
  }
}

export default App;
