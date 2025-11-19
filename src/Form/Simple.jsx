import React, { useState } from 'react'

const Simple = () => {
    const [email, setEmail] = useState('');
    const [error, setEror] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {

            setEror("Email is required")

        } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {

            setEror("Email is valid")
        } else {
            setEror('')
            alert('form submitted')
            console.log('form email', email);

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
            <br /> <br />
            

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type='submit'>Submit</button>


        </form>
    )
}

export default Simple
