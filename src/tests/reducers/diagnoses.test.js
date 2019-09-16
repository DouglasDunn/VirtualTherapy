import diagnosesReducer from '../../reducers/diagnoses';
import diagnosesFixture from '../fixtures/diagnoses';

test('should set default state', () => {
  const state = diagnosesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a diagnoses', () => {
  const diagnoses = {
    id: '109',
    diagnoses: 'fever',
    medication: 'tylenol',
    time: '5:00pm'
  };
  const action = {
    type: 'ADD_DIAGNOSES',
    diagnoses
  };
  const state = diagnosesReducer(diagnosesFixture, action);
  expect(state).toEqual([...diagnosesFixture, diagnoses]);
});

test('should set diagnoses', () => {
  const action = {
    type: 'SET_DIAGNOSES',
    diagnoses: [diagnosesFixture[1]]
  };
  const state = diagnosesReducer(diagnosesFixture, action);
  expect(state).toEqual([diagnosesFixture[1]]);
});
