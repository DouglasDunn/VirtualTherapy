import React from 'react';
import { connect } from 'react-redux';

export class ExerciseQuestionsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePrevious = () => {
    if (this.props.diagnoses.length) {
      this.props.history.push('/add-discontinued-medication');
    } else {
      this.props.history.push('/add-diagnoses');
    }
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
            How much exercise do you get?
            <label>
              <input
                type="radio"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
              />
              No
            </label>
          </form>
          <div>
            <button onClick={this.handlePrevious} className="button">Previous</button>
            <button className="button">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diagnoses: state.diagnoses
});

export default connect(mapStateToProps)(ExerciseQuestionsPage);
