import React, { useState } from 'react';

const Device = () => {
    const [steps, setSteps] = useState(0);
    
    return (
        <div>
            <h2>My Steps {steps} </h2>
        </div>
    );
};

export default Device;
