import React from 'react'

const PlansComponents = ({ plans, updatePlan, deletePlan }) => {
    // console.log("Props", props);
    return (
        <div>
            {plans.map((plan, idx) => <div key={idx} style={{ display: "flex" }}>
                <h4 style={plan.status ? { textDecoration: "line-through" } : {}}>{plan.content}</h4>
                <input type='checkbox' checked={plan.status}
                    onChange={(e) => updatePlan(idx)}
                />
                <button onClick={() => deletePlan(idx)}>Remove</button>
            </div>)}
        </div>
    )
}

export default PlansComponents