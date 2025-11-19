import React from 'react'
import "./Welcome.css"

const Person = () => {

    const Person_data = {

        name: 'Mufeedha',
        age: 25,
        isGoodgirl: 'No'
    }
    return (
        <div>
            <table border='1' cellPadding='10' cellSpacing='10'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>isGoodgirl</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {Person_data.name}
                        </td>
                        <td>{Person_data.age}</td>
                        <td>{Person_data.isGoodgirl}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Person 
