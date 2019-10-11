import React from 'react';
import { Link } from 'react-router-dom';
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
            <h1 className="page-header__title">Diet Questions</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form">
            <p>How often do you eat fruits?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenFruits === 'Everyday'}
                className="radio-input"
                value="Everyday"
                onChange={this.onHowOftenFruitsChange}
              />
              Everyday
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenFruits === 'Most days of the week.'}
                className="radio-input"
                value="Most days of the week."
                onChange={this.onHowOftenFruitsChange}
              />
              Most days of the week.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenFruits === 'A few times a week.'}
                className="radio-input"
                value="A few times a week."
                onChange={this.onHowOftenFruitsChange}
              />
              A few times a week.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenFruits === 'Very rarely.'}
                className="radio-input"
                value="Very rarely."
                onChange={this.onHowOftenFruitsChange}
              />
              Very rarely.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenFruits === 'Never'}
                className="radio-input"
                value="Never"
                onChange={this.onHowOftenFruitsChange}
              />
              Never
            </label>

            <p>How often do you eat vegetables?</p>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenVegetables === 'Everyday'}
                className="radio-input"
                value="Everyday"
                onChange={this.onHowOftenVegetablesChange}
              />
              Everyday
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenVegetables === 'Most days of the week.'}
                className="radio-input"
                value="Most days of the week."
                onChange={this.onHowOftenVegetablesChange}
              />
              Most days of the week.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenVegetables === 'A few times a week.'}
                className="radio-input"
                value="A few times a week."
                onChange={this.onHowOftenVegetablesChange}
              />
              A few times a week.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenVegetables === 'Very rarely.'}
                className="radio-input"
                value="Very rarely."
                onChange={this.onHowOftenVegetablesChange}
              />
              Very rarely.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.howOftenVegetables === 'Never'}
                className="radio-input"
                value="Never"
                onChange={this.onHowOftenVegetablesChange}
              />
              Never
            </label>

            <p>Do you consume a healthy amount of protein daily?</p>
            <label>
              <input
                type="radio"
                checked={this.state.consumeProtein === 'Yes, by eating meat (more red than white).'}
                className="radio-input"
                value="Yes, by eating meat (more red than white)."
                onChange={this.onConsumeProteinChange}
              />
              Yes, by eating meat (more red than white).
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeProtein === 'Yes, by eating meat (more white than red).'}
                className="radio-input"
                value="Yes, by eating meat (more white than red)."
                onChange={this.onConsumeProteinChange}
              />
              Yes, by eating meat (more white than red).
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeProtein === 'Yes, by eating meat (equal amounts of red and white).'}
                className="radio-input"
                value="Yes, by eating meat (equal amounts of red and white)."
                onChange={this.onConsumeProteinChange}
              />
              Yes, by eating meat (equal amounts of red and white).
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeProtein === 'Yes, by protein supplements.'}
                className="radio-input"
                value="Yes, by protein supplements."
                onChange={this.onConsumeProteinChange}
              />
              Yes, by protein supplements.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeProtein === 'No, I consume little to no protein.'}
                className="radio-input"
                value="No, I consume little to no protein."
                onChange={this.onConsumeProteinChange}
              />
              No, I consume little to no protein.
            </label>

            <p>Do you consume a healthy amount of good fats?</p>
            <label>
              <input
                type="radio"
                checked={this.state.consumeFats === 'Yes, for example avocado, olive oil, nuts, etc.'}
                className="radio-input"
                value="Yes, for example avocado, olive oil, nuts, etc."
                onChange={this.onConsumeFatsChange}
              />
              Yes, for example avocado, olive oil, nuts, etc.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeFats === 'I consume a small amount of healthy fats.'}
                className="radio-input"
                value="I consume a small amount of healthy fats."
                onChange={this.onConsumeFatsChange}
              />
              I consume a small amount of healthy fats.
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeFats === 'No, I consume unhealthy fats such as fatty meats, processed meats, butter, cheese, etc.'}
                className="radio-input"
                value="No, I consume unhealthy fats such as fatty meats, processed meats, butter, cheese, etc."
                onChange={this.onConsumeFatsChange}
              />
              No, I consume unhealthy fats such as fatty meats, processed meats, butter, cheese, etc.
            </label>

            <p>How much water do you consume daily?</p>
            <label>
              <input
                type="radio"
                checked={this.state.consumeWater === 'Over 64 ounces (8 glasses)'}
                className="radio-input"
                value="Over 64 ounces (8 glasses)"
                onChange={this.onConsumeWaterChange}
              />
              Over 64 ounces (8 glasses)
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeWater === '32 ounces to 64 ounces (4-8 glasses)'}
                className="radio-input"
                value="32 ounces to 64 ounces (8 glasses)"
                onChange={this.onConsumeWaterChange}
              />
              32 ounces to 64 ounces (8 glasses)
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeWater === '8 ounces to 32 ounces (1-4 glasses)'}
                className="radio-input"
                value="8 ounces to 32 ounces (1-4 glasses)"
                onChange={this.onConsumeWaterChange}
              />
              8 ounces to 32 ounces (1-4 glasses)
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.consumeWater === "I don't drink water."}
                className="radio-input"
                value="I don't drink water."
                onChange={this.onConsumeWaterChange}
              />
              I don't drink water.
            </label>
          </form>
          <div>
            <Link className="button" to='exercise-questions'>Previous</Link>
            <button onClick={this.onSubmit} className="button">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dietQuestions: state.dietQuestions
});

const mapDispatchToProps = (dispatch) => ({
  addDietQuestions: (dietQuestions) => dispatch(addDietQuestions(dietQuestions))
});

export default connect(mapStateToProps, mapDispatchToProps)(DietQuestionsPage);
