import React from 'react';
import { connect } from 'react-redux';
import { addDietQuestions } from '../actions/dietQuestions';

export class DietQuestionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      howOftenFruits: this.props.dietQuestions ? this.props.dietQuestions.howOftenFruits : '',
      howOftenVegetables: this.props.dietQuestions ? this.props.dietQuestions.howOftenVegetables : '',
      consumeProtein: this.props.dietQuestions ? this.props.dietQuestions.consumeProtein : '',
      consumeFats: this.props.dietQuestions ? this.props.dietQuestions.consumeFats : '',
      consumeWater: this.props.dietQuestions ? this.props.dietQuestions.consumeWater : ''
    };
  }

  onHowOftenFruitsChange = (e) => {
    const howOftenFruits = e.target.value;
    this.setState(() => ({ howOftenFruits }));
  };

  onHowOftenVegetablesChange = (e) => {
    const howOftenVegetables = e.target.value;
    this.setState(() => ({ howOftenVegetables }));
  };

  onConsumeProteinChange = (e) => {
    const consumeProtein = e.target.value;
    this.setState(() => ({ consumeProtein }));
  };

  onConsumeFatsChange = (e) => {
    const consumeFats = e.target.value;
    this.setState(() => ({ consumeFats }));
  };

  onConsumeWaterChange = (e) => {
    const consumeWater = e.target.value;
    this.setState(() => ({ consumeWater }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addDietQuestions({
      howOftenFruits: this.state.howOftenFruits,
      howOftenVegetables: this.state.howOftenVegetables,
      consumeProtein: this.state.consumeProtein,
      consumeFats: this.state.consumeFats,
      consumeWater: this.state.consumeWater
    });
    this.props.history.push('/sleep-questions');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Sleep Questions</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form">
            <p>How many hours of sleep do you get per night?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === '8 or more hours.'}
                className="radio-input"
                value="8 or more hours."
                onChange={this.onHowMuchChange}
              />
              8 or more hours.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === 'Between 6-8 hours.'}
                className="radio-input"
                value="Between 6-8 hours."
                onChange={this.onHowMuchChange}
              />
              Between 6-8 hours.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === 'Between 4-6 hours.'}
                className="radio-input"
                value="Between 4-6 hours."
                onChange={this.onHowMuchChange}
              />
              Between 4-6 hours.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howMuch === 'Less than 4 hours.'}
                className="radio-input"
                value="Less than 4 hours."
                onChange={this.onHowMuchChange}
              />
              Less than 4 hours.
            </label>

            <p>Do you have a sleep schedule?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howRigorous === 'Yes, I try to follow it everyday.'}
                className="radio-input"
                value="Yes, I try to follow it everyday"
                onChange={this.onHowRigorousChange}
              />
              Yes, I try to follow it everyday
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howRigorous === 'Yes, but I have a hard time sticking to it.'}
                className="radio-input"
                value="Yes, but I have a hard time sticking to it."
                onChange={this.onHowRigorousChange}
              />
              Yes, but I have a hard time sticking to it.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howRigorous === 'No, my sleep schedule is all over the place.'}
                className="radio-input"
                value="No, my sleep schedule is all over the place."
                onChange={this.onHowRigorousChange}
              />
              No, my sleep schedule is all over the place.
            </label>

            <p>Do you have trouble falling asleep?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === 'Yes'}
                className="radio-input"
                value="Yes"
                onChange={this.onHowLongChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === 'No'}
                className="radio-input"
                value="No"
                onChange={this.onHowLongChange}
              />
              No
            </label>

            <p>Do you have trouble staying asleep?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === 'Yes'}
                className="radio-input"
                value="Yes"
                onChange={this.onHowLongChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === 'No'}
                className="radio-input"
                value="No"
                onChange={this.onHowLongChange}
              />
              No
            </label>

            <p>How do you feel after you've woken up?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === 'Yes'}
                className="radio-input"
                value="Yes"
                onChange={this.onHowLongChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howLong === 'No'}
                className="radio-input"
                value="No"
                onChange={this.onHowLongChange}
              />
              No
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
