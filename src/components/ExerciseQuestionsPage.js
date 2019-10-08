import React from 'react';
import { connect } from 'react-redux';
import { addExerciseQuestions } from '../actions/exerciseQuestions';

export class ExerciseQuestionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      howMuch: this.props.exerciseQuestions ? this.props.exerciseQuestions.howMuch : '',
      howRigorous: this.props.exerciseQuestions ? this.props.exerciseQuestions.howRigorous : '',
      howLong: this.props.exerciseQuestions ? this.props.exerciseQuestions.howLong : ''
    };
  }

  onHowMuchChange = (e) => {
    const howMuch = e.target.value;
    this.setState(() => ({ howMuch }));
  };

  onHowRigorousChange = (e) => {
    const howRigorous = e.target.value;
    this.setState(() => ({ howRigorous }));
  };

  onHowLongChange = (e) => {
    const howLong = e.target.value;
    this.setState(() => ({ howLong }));
  };

  handlePrevious = () => {
    if (this.props.diagnoses.length) {
      this.props.history.push('/add-discontinued-medication');
    } else {
      this.props.history.push('/add-diagnoses');
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addExerciseQuestions({
      howMuch: this.state.howMuch,
      howRigorous: this.state.howRigorous,
      howLong: this.state.howLong
    });
    this.props.history.push('/diet-questions');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Exercise Questions</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form">
            <p>How much exercise do you get?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === '0 days out of the week.'}
                className="radio-input"
                value="0 days out of the week."
                onChange={this.onHowMuchChange}
              />
              0 days out of the week.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === '1-2 days out of the week.'}
                className="radio-input"
                value="1-2 days out of the week."
                onChange={this.onHowMuchChange}
              />
              1-2 days out of the week.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === '3-5 days out of the week.'}
                className="radio-input"
                value="3-5 days out of the week."
                onChange={this.onHowMuchChange}
              />
              3-5 days out of the week.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === '5-7 days out of the week.'}
                className="radio-input"
                value="5-7 days out of the week."
                onChange={this.onHowMuchChange}
              />
              5-7 days out of the week.
            </label>

            <p>How rigorous is your exercise?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howRigorous === 'Light exercise.'}
                className="radio-input"
                value="Light exercise."
                onChange={this.onHowRigorousChange}
              />
              Light exercise.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howRigorous === 'Light to moderate.'}
                className="radio-input"
                value="Light to moderate."
                onChange={this.onHowRigorousChange}
              />
              Light to moderate.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howRigorous === 'Moderate to intense.'}
                className="radio-input"
                value="Moderate to intense."
                onChange={this.onHowRigorousChange}
              />
              Moderate to intense.
            </label>

            <p>How long do you exercise per session on average?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === '30 minutes or less.'}
                className="radio-input"
                value="30 minutes or less."
                onChange={this.onHowLongChange}
              />
              30 minutes or less.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === '30 minutes to 1 hour.'}
                className="radio-input"
                value="30 minutes to 1 hour."
                onChange={this.onHowLongChange}
              />
              30 minutes to 1 hour.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === '1 hour or more.'}
                className="radio-input"
                value="1 hour or more."
                onChange={this.onHowLongChange}
              />
              1 hour or more.
            </label>
          </form>
          <div>
            <button onClick={this.handlePrevious} className="button">Previous</button>
            <button onClick={this.onSubmit} className="button">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diagnoses: state.diagnoses,
  exerciseQuestions: state.exerciseQuestions
});

const mapDispatchToProps = (dispatch) => ({
  addExerciseQuestions: (exerciseQuestions) => dispatch(addExerciseQuestions(exerciseQuestions))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseQuestionsPage);
