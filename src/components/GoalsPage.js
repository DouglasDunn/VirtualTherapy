import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import DailyGoalListItem from './DailyGoalListItem';
import { startAddDailyGoal } from '../actions/dailyGoals';

export class GoalsPage extends React.Component {
  onSubmit = (dailyGoal) => {
    this.props.startAddDailyGoal(dailyGoal);
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Goals</h1>
          </div>
        </div>
        <div className="content-container">
          <h2>Daily Goals</h2>
          <GoalForm
            onSubmit={this.onSubmit}
          />
          <div className="list-body">
            {
              this.props.dailyGoals.length === 0 ? (
                <div className="list-item list-item--message">
                  <span>No daily goals</span>
                </div>
              ) : (
                this.props.dailyGoals.map((dailyGoal) => {
                  return <DailyGoalListItem key={dailyGoal.id} {...dailyGoal} />;
                })
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dailyGoals: state.dailyGoals
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddDailyGoal: (dailyGoal) => dispatch(startAddDailyGoal(dailyGoal))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage);
