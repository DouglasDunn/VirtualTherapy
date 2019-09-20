import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import MedicationHistoryForm from '../../components/MedicationHistoryForm';
import medicationHistories from '../fixtures/medicationHistories';

test('should render MedicationHistoryForm correctly', () => {
  const wrapper = shallow(<MedicationHistoryForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MedicationHistoryForm correctly with medicationHistory data', () => {
  const wrapper = shallow(<MedicationHistoryForm medicationHistory={medicationHistories[1]} />);
  expect(wrapper).toMatchSnapshot();
});

// test('should render error for invalid form submission', () => {
//   const wrapper = shallow(<ExpenseForm />);
//   expect(wrapper).toMatchSnapshot();
//   wrapper.find('form').simulate('submit', {
//     preventDefault: () => { }
//   });
//   expect(wrapper.state('error').length).toBeGreaterThan(0);
//   expect(wrapper).toMatchSnapshot();
// });

test('should set medication on input change', () => {
  const value = 'New medication';
  const wrapper = shallow(<MedicationHistoryForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('medication')).toBe(value);
});

test('should set dose on input change', () => {
  const value = 'New dose';
  const wrapper = shallow(<MedicationHistoryForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('dose')).toBe(value);
});

test('should set purpose on textarea change', () => {
  const value = 'New purpose value';
  const wrapper = shallow(<MedicationHistoryForm />);
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('purpose')).toBe(value);
});

test('should set sideEffects on textarea change', () => {
  const value = 'New sideEffects value';
  const wrapper = shallow(<MedicationHistoryForm />);
  wrapper.find('textarea').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('sideEffects')).toBe(value);
});

test('should set current on textarea change', () => {
  const value = 'New current value';
  const wrapper = shallow(<MedicationHistoryForm />);
  wrapper.find('textarea').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('current')).toBe(value);
});

// test('should set amount if valid input', () => {
//   const value = '23.50';
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('input').at(1).simulate('change', {
//     target: { value }
//   });
//   expect(wrapper.state('amount')).toBe(value);
// });
//
// test('should not set amount if invalid input', () => {
//   const value = '12.122';
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('input').at(1).simulate('change', {
//     target: { value }
//   });
//   expect(wrapper.state('amount')).toBe('');
// });

// test('should call onSubmit prop for valid form submission', () => {
//   const onSubmitSpy = jest.fn();
//   const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
//   wrapper.find('form').simulate('submit', {
//     preventDefault: () => { }
//   });
//   expect(wrapper.state('error')).toBe('');
//   expect(onSubmitSpy).toHaveBeenLastCalledWith({
//     description: expenses[0].description,
//     amount: expenses[0].amount,
//     note: expenses[0].note,
//     createdAt: expenses[0].createdAt
//   });
// });

// test('should set new date on date change', () => {
//   const now = moment();
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//   expect(wrapper.state('createdAt')).toEqual(now);
// });
//
// test('should set calendar focus on change', () => {
//   const focused = true;
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//   expect(wrapper.state('calendarFocused')).toBe(focused);
// });
