import { useState } from 'react'

function first(props) {
    return (
        <fieldset>
            <table>
                <thead>
                    <tr>
                        <th>first Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Hair Color</th>
                    </tr>
                </thead>
            {props.user.map((element, idx) => {
                return (
                    <tbody>
                        <tr key={idx}>
                            <td >{element.firstName}</td>
                            <td >{element.lastName}</td>
                            <td >{element.age}</td>
                            <td >{element.hairColor}</td>
                        </tr>
                    </tbody>)
                
            })}
            </table>


        </fieldset>
    )
}
export default first