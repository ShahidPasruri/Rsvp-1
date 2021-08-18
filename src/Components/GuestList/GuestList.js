import React from 'react';
import PropTypes from 'prop-types';
import Guest from '../Guest/Guest';
import PendingGuest from '../PendingGuest/PendingGuest';
const GuestList = (props) => {
    return ( 
        <>
        <ul>
        <PendingGuest name={props.PendingGuest}/>
        { props.guests.filter(guest=>!props.isFilterd || guest.isConfirmed ).map((guest,index)=><Guest name={guest.name} id={props.id} isConfirmed={guest.isConfirmed} isEdit={guest.isEdit} key={index} handleChange={()=>props.toggleConfirmationAt(guest.id)} toggleEditAt={()=>props.toggleEditAt(guest.id)} removeGuest={()=>{props.removeGuest(guest.id)}} setName={text=>props.setNameAt(text,guest.id)} index={index}/>)}
        </ul>
        </>
     );

  
}
GuestList.propTypes={
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditAt: PropTypes.func.isRequired,
  PendingGuest:PropTypes.string.isRequired

}
 
export default GuestList;