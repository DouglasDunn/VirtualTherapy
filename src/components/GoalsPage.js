import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import DailyGoalListItem from './DailyGoalListItem';
import LongTermGoalListItem from './LongTermGoalListItem';
import { startAddDailyGoal } from '../actions/dailyGoals';
import { startAddLongTermGoal } from '../actions/longTermGoals';

export class GoalsPage extends React.Component {
  onSubmitDailyGoal = (dailyGoal) => {
    this.props.startAddDailyGoal(dailyGoal);
  };
  onSubmitLongTermGoal = (longTermGoal) => {
    this.props.startAddLongTermGoal(longTermGoal);
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
            onSubmit={this.onSubmitDailyGoal}
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

          <h2>Long-Term Goals</h2>
          <GoalForm
            onSubmit={this.onSubmitLongTermGoal}
          />
          <div className="list-body">
            {
              this.props.longTermGoals.length === 0 ? (
                <div className="list-item list-item--message">
                  <span>No long-term goals</span>
                </div>
              ) : (
                this.props.longTermGoals.map((longTermGoal) => {
                  return <LongTermGoalListItem key={longTermGoal.id} {...longTermGoal} />;
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
    dailyGoals: state.dailyGoals,
    longTermGoals: state.longTermGoals
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddDailyGoal: (dailyGoal) => dispatch(startAddDailyGoal(dailyGoal)),
  startAddLongTermGoal: (longTermGoal) => dispatch(startAddLongTermGoal(longTermGoal))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage);
