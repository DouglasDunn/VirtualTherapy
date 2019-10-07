import React from 'react';
import { connect } from 'react-redux';
import DiagnosesForm from './DiagnosesForm';
import { startAddDiagnoses } from '../actions/diagnoses';
import DiagnosesListItem from './DiagnosesListItem';

export class AddDiagnosesPage extends React.Component {
  onSubmit = (diagnoses) => {
    this.props.startAddDiagnoses(diagnoses);
    this.props.history.push('/diagnoses');
    console.log('add');
    console.log(this.props);
  };
  // nextPage = () => {
  //   this.props.history.push('/diagnoses');
  // };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Diagnoses or Symptoms</h1>
          </div>
        </div>
        <div className="content-container">
          <DiagnosesForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   diagnoses: state.diagnoses
// });

const mapDispatchToProps = (dispatch) => ({
  startAddDiagnoses: (diagnoses) => dispatch(startAddDiagnoses(diagnoses))
});

// export default connect(mapStateToProps, mapDispatchToProps)(AddDiagnosesPage);

export default connect(undefined, mapDispatchToProps)(AddDiagnosesPage);

// <div className="content-container">
//   <div className="list-header">
//     <div className="show-for-mobile">Diagnoses</div>
//     <div className="show-for-desktop">Diagnoses</div>
//     <div className="show-for-desktop">Time</div>
//   </div>
//   <div className="list-body">
//     {
//       this.props.diagnoses.length === 0 ? (
//         <div className="list-item list-item--message">
//           <span>No Diagnoses yet, click the button above to add them.</span>
//         </div>
//       ) : (
//         this.props.diagnoses.map((diagnoses) => {
//           return <DiagnosesListItem key={diagnoses.id} {...diagnoses} />;
//         })
//       )
//     }
//   </div>
// </div>
// <div className="content-container">
//   <button onClick={this.nextPage} className="button">Next</button>
// </div>
