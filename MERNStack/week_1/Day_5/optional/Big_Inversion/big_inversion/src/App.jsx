import React, { useState, useReducer } from 'react';
import './App.css';
import PlansComponents from './components/TodoList';
import FromComponent from './components/FromComponent';
import { createContext } from 'react';

const initialState = {
  plans: {
    value: [
      { content: 'Eat breakfast', status: true },
      { content: 'Wake up at 6 am', status: false }
    ],
    error: null
  }
};

const actionTypes = {
  ADD_NEW_PLAN: 'ADD_NEW_PLAN',
  UPDATE_FIELD: 'UPDATE_FIELD',
  DELETE_PLAN: 'DELETE_PLAN'
};

function reducer(state, action) {
  const { field, payload } = action;

  if (field in state) {
    let error = null;

    if (payload !== '') {
      if (field === 'plans') {
        error = payload.length === 0 ? `The ${field} mustn't be empty; it must contain a task` : null;
      }
    } else {
      error = '';
    }

    return {
      ...state,
      [field]: {
        ...state[field],
        value: payload,
        error
      }
    };
  }

  if (action.type === actionTypes.DELETE_PLAN) {
    const filteredPlans = state.plans.value.filter((_, idx) => idx !== action.index);
    return {
      ...state,
      plans: {
        ...state.plans,
        value: filteredPlans
      }
    };
  }

  return state;
}

function App() {
  const context = createContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const addPlan = () => {
    dispatch({
      type: actionTypes.ADD_NEW_PLAN,
      field: 'plans',
      payload: [
        ...state.plans.value,
        { content: input, status: false } // Assuming the new plan has a default status of false
      ]
    });
    setInput('');
  };

  const updatePlan = (index) => {
    const updatedPlans = state.plans.value.map((plan, idx) =>
      idx === index ? { ...plan, status: !plan.status } : plan
    );
    dispatch({
      type: actionTypes.UPDATE_FIELD,
      field: 'plans',
      payload: updatedPlans
    });
  };

  const deletePlan = (index) => {
    dispatch({ type: actionTypes.DELETE_PLAN, index });
  };

  return (
    <>
      <h1>Add Your Plans for Today</h1>
      <FromComponent addPlan={addPlan} error={state.error} input={input} setInput={setInput} />
      <PlansComponents plans={state.plans.value} updatePlan={updatePlan} deletePlan={deletePlan} />
    </>
  );
}

export default App;

