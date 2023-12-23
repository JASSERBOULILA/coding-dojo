import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    const { field, payload } = action;
    console.log(action)
    if (field in state) {
        let error = null;
        if(payload!=""){
            if (field === 'email') {
                error = payload.length < 8 ? `The ${field} must be at least 8 characters long` : null;
                // Add additional email-specific validation rules here
            } else if (field === 'lastName') {
                error = payload.length < 9 ? `The ${field} must be at least 9 characters long` : null;
                // Add additional lastName-specific validation rules here
            } else {
                error = payload.length < 3 ? `The ${field} must be at least 3 characters long` : null;
                // Default validation rule for other fields
            }
        }else{
            error="";
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
    return state;
}


const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'UPDATE_FIELD',
            field: name,
            payload: value
        });
    };
    const handle = (e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <fieldset>
                <form onSubmit={handle}>
                    <label>
                        First Name
                    </label>
                    <input type="text" name='firstName' onChange={handleChange} />
                    {state.firstName.error !== null && <h4>{state.firstName.error}</h4>}
                    <label>
                        last Name
                    </label>
                    <input type="text" name='lastName' onChange={handleChange} />
                    {state.lastName.error !== null && <h4>{state.lastName.error}</h4>}
                    <label>
                        email
                    </label>
                    <input type="email" name='email' onChange={handleChange} />
                    {state.email.error !== null && <h4>{state.lastName.error}</h4>}
                    <button>Submit</button>
                </form>
            </fieldset>
        </div>
    );
};

export default Form;

