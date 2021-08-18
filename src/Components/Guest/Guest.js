import React from 'react';
import PropTypes from 'prop-types'
import GuestName from '../GuestName/GuestName';
const Guest = (props) => {
    return ( 
        <>
           <li>
            <GuestName isEdit={props.isEdit} handleNameEdits={e=>props.setName(e.target.value)}>{props.name}</GuestName>
            <label>
              <input type="checkbox" checked={props.isConfirmed} onChange={props.handleChange}/> Confirmed
            </label>
            <button onClick={props.toggleEditAt}>{props.isEdit ? 'Done' : 'Edit'}</button>
            <button onClick={props.removeGuest}>remove</button>
          </li> 
        </>
     );
    }

    Guest.propTypes={
        name:PropTypes.string.isRequired,
        isConfirmed: PropTypes.bool.isRequired,
        isEdit:PropTypes.bool.isRequired,
        handleChange:PropTypes.func.isRequired,
        toggleEditAt:PropTypes.func.isRequired
    }
export default Guest;