import React from 'react';
import gif from './spinner.gif';

export default function Spinner() {
    return (
        <React.Fragment>
            <img src={gif} alt="Loading..."
                style={{width:'200px',
                margin: 'auto',
                display: 'block'}}
            />
        </React.Fragment>
    )
}
