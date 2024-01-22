import React from 'react'

const Dashboard = ({ userId }) => {
    console.log("hello dash !", userId)
    return (
        <div>Dashboard :{userId}</div>
    )
}

export default Dashboard