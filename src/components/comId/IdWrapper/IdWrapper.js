import React from 'react';
import './IdWrapper.css'

const IdWrapper = ({children}) => {
    return (
        <div className="IdWrapper">
            {children}
        </div>
    );
};

export default IdWrapper;