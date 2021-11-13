import React, {useState} from 'react';

const History = () => {
    const [history, setHistory]=useState(0)
    return (
        <div>
            {history >= 0 && <h1>You did't rent any car yet. Do it now! <a>Click here</a> </h1>}
        </div>
    );
};

export default History;