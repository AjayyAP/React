import React, { useEffect, useState } from 'react'

const UseEff = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const intervel = setInterval(() => {
            setSeconds((S) => S + 1);

        }, 1000);
        //unmount

        return () => clearInterval(intervel)

    }, []) //mount
    return (
        <div>
            <p>Time: {seconds} seconds</p>
        </div>
    )
}

export default UseEff
