import React from 'react'

const Items = () => {

    const fruitItems = ['Apple', 'orange', 'banana']

    return (
        <div>
            <ul>
                {fruitItems.map((ys, index) => (
                    <li key={index}>{ys}</li>
                ))}
            </ul>
        </div>
    )
}

export default Items
