import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPoll } from '../actions/polls';

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;
    return question === '' || a === '' || b === '' || c === '' || d === '';
  };

  handleSubmit = e => {
    e.preventDefault();
    //Redirect to /
    this.props.dispatch(handleAddPoll(this.state));
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: '1.5rem' }}>What is your question?</h3>
        <input
          value={question}
          onChange={this.handleInputChange}
          name="question"
          className="input"
          type="text"
        />
        <h3>What are the options?</h3>
        <label htmlFor="a" className="label">
          A.
        </label>
        <input
          value={a}
          onChange={this.handleInputChange}
          name="a"
          id="a"
          className="input"
          type="text"
        />
        <label htmlFor="b" className="label">
          B.
        </label>
        <input
          value={b}
          onChange={this.handleInputChange}
          name="b"
          id="b"
          className="input"
          type="text"
        />
        <label htmlFor="c" className="label">
          C.
        </label>
        <input
          value={c}
          onChange={this.handleInputChange}
          name="c"
          id="c"
          className="input"
          type="text"
        />
        <label htmlFor="d" className="label">
          D.
        </label>
        <input
          value={d}
          onChange={this.handleInputChange}
          name="d"
          id="d"
          className="input"
          type="text"
        />

        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
