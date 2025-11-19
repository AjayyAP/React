import React from 'react'

const AllProducts = () => {

    const Products = [
        { id: 'p1', name: 'shirt' },
        { id: 'p2', name: 'shorts' },

    ]
    return (
        <div>
            <ul>
                {Products.map(nasar => (
                    <li
                        style={{ backgroundColor: 'blueviolet', color: 'black', padding: '10px', margin: '10px' }}
                        key={nasar.id}>
                        {nasar.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts
