import React, { useState } from 'react'

function Textinput() {
    const [name, setName] = useState("");
    return (
        <div>
            <input type="text" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} />

            <p>Hello,{name || 'stranger'}!</p>
        </div>
    );
}

export default Textinput