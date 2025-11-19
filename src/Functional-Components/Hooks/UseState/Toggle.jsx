import React, { useState } from 'react'

function Togglebutton() {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? '🔊 ON' : '🔇OFF'}
            </button>
        </div>
    )
}

export default Togglebutton