import React from 'react';
const GuestName = (props) => {
    if(props.isEdit){
        return(
            <input type='text' value={props.children} onChange={props.handleNameEdits}></input>
        )
    }
        return(
            <span>{props.children}</span>
        )
}
 
export default GuestName;