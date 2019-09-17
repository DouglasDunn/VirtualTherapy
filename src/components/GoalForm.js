import React from 'react';

export default class GoalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: '',
      completed: false
    };
  }

  onGoalChange = (e) => {
    const goal = e.target.value;
    this.setState(() => ({ goal }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      goal: this.state.goal,
      completed: this.state.completed
    });
    this.state.goal = '';
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Goal"
          autoFocus
          className="text-input"
          value={this.state.goal}
          onChange={this.onGoalChange}
        />
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    )
  }
}
