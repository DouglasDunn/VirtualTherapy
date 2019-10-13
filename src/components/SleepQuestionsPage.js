import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSleepQuestions } from '../actions/sleepQuestions';

export class SleepQuestionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoursOfSleep: this.props.sleepQuestions ? this.props.sleepQuestions.hoursOfSleep : '',
      sleepSchedule: this.props.sleepQuestions ? this.props.sleepQuestions.sleepSchedule : '',
      fallingAsleep: this.props.sleepQuestions ? this.props.sleepQuestions.fallingAsleep : '',
      stayingAsleep: this.props.sleepQuestions ? this.props.sleepQuestions.stayingAsleep : '',
      wokenUp: this.props.sleepQuestions ? this.props.sleepQuestions.wokenUp : ''
    };
  }

  onHoursOfSleepChange = (e) => {
    const hoursOfSleep = e.target.value;
    this.setState(() => ({ hoursOfSleep }));
  };

  onSleepScheduleChange = (e) => {
    const sleepSchedule = e.target.value;
    this.setState(() => ({ sleepSchedule }));
  };

  onFallingAsleepChange = (e) => {
    const fallingAsleep = e.target.value;
    this.setState(() => ({ fallingAsleep }));
  };

  onStayingAsleepChange = (e) => {
    const stayingAsleep = e.target.value;
    this.setState(() => ({ stayingAsleep }));
  };

  onWokenUpChange = (e) => {
    const wokenUp = e.target.value;
    this.setState(() => ({ wokenUp }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addSleepQuestions({
      hoursOfSleep: this.state.hoursOfSleep,
      sleepSchedule: this.state.sleepSchedule,
      fallingAsleep: this.state.fallingAsleep,
      stayingAsleep: this.state.stayingAsleep,
      wokenUp: this.state.wokenUp
    });
    this.props.history.push('/dashboard');
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
                checked={this.state.hoursOfSleep === '8 or more hours.'}
                className="radio-input"
                value="8 or more hours."
                onChange={this.onHoursOfSleepChange}
              />
              8 or more hours.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.hoursOfSleep === 'Between 6-8 hours.'}
                className="radio-input"
                value="Between 6-8 hours."
                onChange={this.onHoursOfSleepChange}
              />
              Between 6-8 hours.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.hoursOfSleep === 'Between 4-6 hours.'}
                className="radio-input"
                value="Between 4-6 hours."
                onChange={this.onHoursOfSleepChange}
              />
              Between 4-6 hours.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.hoursOfSleep === 'Less than 4 hours.'}
                className="radio-input"
                value="Less than 4 hours."
                onChange={this.onHoursOfSleepChange}
              />
              Less than 4 hours.
            </label>

            <p>Do you have a sleep schedule?</p>
            <label>
              <input
                type="radio"
                checked={this.state.sleepSchedule === 'Yes, I try to follow it everyday.'}
                className="radio-input"
                value="Yes, I try to follow it everyday."
                onChange={this.onSleepScheduleChange}
              />
              Yes, I try to follow it everyday.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.sleepSchedule === 'Yes, but I have a hard time sticking to it.'}
                className="radio-input"
                value="Yes, but I have a hard time sticking to it."
                onChange={this.onSleepScheduleChange}
              />
              Yes, but I have a hard time sticking to it.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.sleepSchedule === 'No, my sleep schedule is all over the place.'}
                className="radio-input"
                value="No, my sleep schedule is all over the place."
                onChange={this.onSleepScheduleChange}
              />
              No, my sleep schedule is all over the place.
            </label>

            <p>Do you have trouble falling asleep?</p>
            <label>
              <input
                type="radio"
                checked={this.state.fallingAsleep === 'Yes'}
                className="radio-input"
                value="Yes"
                onChange={this.onFallingAsleepChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.fallingAsleep === 'No'}
                className="radio-input"
                value="No"
                onChange={this.onFallingAsleepChange}
              />
              No
            </label>

            <p>Do you have trouble staying asleep?</p>
            <label>
              <input
                type="radio"
                checked={this.state.stayingAsleep === 'Yes'}
                className="radio-input"
                value="Yes"
                onChange={this.onStayingAsleepChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.stayingAsleep === 'No'}
                className="radio-input"
                value="No"
                onChange={this.onStayingAsleepChange}
              />
              No
            </label>

            <p>How do you feel after you've woken up?</p>
            <label>
              <input
                type="radio"
                checked={this.state.wokenUp === 'Well-rested'}
                className="radio-input"
                value="Well-rested"
                onChange={this.onWokenUpChange}
              />
              Well-rested
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.wokenUp === 'Tired'}
                className="radio-input"
                value="Tired"
                onChange={this.onWokenUpChange}
              />
              Tired
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.wokenUp === "Exhausted, like my sleep didn't help me rest."}
                className="radio-input"
                value="Exhausted, like my sleep didn't help me rest."
                onChange={this.onWokenUpChange}
              />
              Exhausted, like my sleep didn't help me rest.
            </label>
            <div>
              <Link className="button" to='diet-questions'>Previous</Link>
              <button onClick={this.onSubmit} className="button">Next</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sleepQuestions: state.sleepQuestions
});

const mapDispatchToProps = (dispatch) => ({
  addSleepQuestions: (sleepQuestions) => dispatch(addSleepQuestions(sleepQuestions))
});

export default connect(mapStateToProps, mapDispatchToProps)(SleepQuestionsPage);
