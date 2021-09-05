import { Fragment } from "react";
import React from 'react';

export default function Alarm(props) {
    const {alarm} = props;
    
    if (alarm != null) {
        
        const className = "alert alert-"+alarm.type;
        return (
            <div className={className}>
                {alarm.text}
            </div>
        )
    }
    else{
        return (
        <Fragment></Fragment>
        )
    }
}
