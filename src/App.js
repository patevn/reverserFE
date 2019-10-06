import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  callAPI() {
    fetch('http://localhost:9000/check')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  sendAPI() {
    return fetch(`http://localhost:9000/reverser/?${this.state.value}`)
      .then(res => res.text())
      .then(res => this.setState({ peter: res }))
      .catch(err => err);
  }

  async handleSubmit(event) {
    await this.sendAPI();
    alert('dettimbus saw eman: ' + this.state.peter);
    event.preventDefault();
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro">{this.state.apiResponse}</p>
        </header>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
