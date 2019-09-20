import medicationHistoryReducer from '../../reducers/medicationHistory';
import medicationHistories from '../fixtures/medicationHistories';

test('should set default state', () => {
  const state = medicationHistoryReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a medicationHistory', () => {
  const medicationHistory = {
    id: '109',
    medication: 'midol',
    dose: '20mg',
    purpose: 'cramps',
    sideEffects: 'drowsiness, increase in appetite',
    current: 'yes'
  };
  const action = {
    type: 'ADD_MEDICATION_HISTORY',
    medicationHistory
  };
  const state = medicationHistoryReducer(medicationHistories, action);
  expect(state).toEqual([...medicationHistories, medicationHistory]);
});

test('should set medicationHistories', () => {
  const action = {
    type: 'SET_MEDICATION_HISTORIES',
    medicationHistories: [medicationHistories[1]]
  };
  const state = medicationHistoryReducer(medicationHistories, action);
  expect(state).toEqual([medicationHistories[1]]);
});
