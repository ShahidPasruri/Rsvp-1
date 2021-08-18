import React from 'react';
const Counter = (props) => {
    const totalInvited=props.totalGuests();
    const confirmed=props.Confirmed()
    const UnConfirmed=props.unConfirmed()
    return ( 
        <>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>{confirmed}</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>{UnConfirmed}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{totalInvited}</td>
            </tr>
          </tbody>
        </table>
        </>
     );
}
 
export default Counter;