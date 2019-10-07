import React from 'react';
import { connect } from 'react-redux';
import DiagnosesListItem from './DiagnosesListItem';

const initialErrorState = {
  diagnosedError: '',
  diagnosesListError: ''
};

export class AddMedicationPage extends React.Component {
  constructor(props) {
    super(props);

    let count = 0;

    this.props.diagnoses.forEach(({ medication }) => { medication && count++; });

    this.state = {
      prescribed: count ? 'yes': 'no'
    };
  }

  onPrescribedChange = (e) => {
    const prescribed = e.target.value;
    this.setState(() => ({ prescribed }));
  };

  handlePrevious = () => {
    this.props.history.push('/add-diagnoses');
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.history.push('/add-discontinued-medication');
  };

  renderDianosesData = () => {
    if (this.state.prescribed === 'yes') {
      return (
        <div>
          <div className="list-header">
            <div className="show-for-mobile">Diagnoses</div>
            <div className="show-for-desktop">Diagnoses</div>
          </div>
          <div className="list-body">
            {
              this.props.diagnoses.map(diagnoses =>
                <DiagnosesListItem key={diagnoses.id} {...diagnoses} />
              )
            }
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Medication</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form">
            Are you taking any prescribed medication for your symptoms or diagnoses?
            <label>
              <input
                type="radio"
                checked={this.state.prescribed === 'yes'}
                className="radio-input"
                value="yes"
                onChange={this.onPrescribedChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.prescribed === 'no'}
                className="radio-input"
                value="no"
                onChange={this.onPrescribedChange}
              />
              No
            </label>
            {this.renderDianosesData()}
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
  diagnoses: state.diagnoses
});
//
// const mapDispatchToProps = (dispatch) => ({
//   startAddDiagnoses: (diagnoses) => dispatch(startAddDiagnoses(diagnoses))
// });
//
export default connect(mapStateToProps)(AddMedicationPage);

//********** Figure this out later on **************************
// renderMedicationForm = () => {
//   if (this.state.prescribed === 'yes') {
//     return this.props.diagnoses.map(({ diagnoses, id }) => (
//       <div key={id}>
//         <p>{diagnoses}</p>
//         <input
//           type="text"
//           id={id}
//           placeholder="Medication"
//           className="text-input"
//           value={this.state.medication}
//           onChange={this.onMedicationChange}
//         />
//         <input
//           type="text"
//           placeholder="Time"
//           className="text-input"
//           value={this.state.time}
//           onChange={this.onTimeChange}
//         />
//       </div>
//     ));
//   }
// };
