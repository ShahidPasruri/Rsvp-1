import React, {Component} from 'react';
import Counter from '../Counter/Counter';
import GuestList from '../GuestList/GuestList';
import './App.css'
class App extends Component {
  lastId=0;
  newId=()=>{
    let id=this.lastId;
    this.lastId+=1
    return id;
  }

  state={
    isFilterd: false,
    pendingGuest: '',
    guests:[
      
    ]
  }
  
  //This Method to update isCOnfirmed is can also work..But we Use treehouselogic
  // toggleConfirmationAt=(indexToChange)=>{
  //   const guestArr=this.state.guests.slice();
  //   this.state.guests[indexToChange].isConfirmed= !this.state.guests[indexToChange].isConfirmed;
  //   // const toggleConfirm = guestArr[index].isConfirmed
  //   this.setState({isConfirmed: guestArr[indexToChange].isConfirmed})
  // }

  
  toggleConfirmationAt=(id)=>{
    this.setState({
      guests: this.state.guests.map((guest)=>{
        if(id ===  guest.id){
          return{
            ...guest,//Copying object properties into new object literal
            isConfirmed: !guest.isConfirmed
          }
        }
        return guest;
      })
    })
  }

  toggleEditAt=(id)=>{
    this.setState({
      guests: this.state.guests.map((guest)=>{
      if(id === guest.id){
        {/* INDEXTOEDIT wo wala index hy jo dusri side py chal rha jhan function call hona hy*/}
        {/* mtlb k ye wala INDEX or wo jo dursa INDEX jahan function call hva hy match kr jayen to ye return ho*/}
          return{
            ...guest,//Copying object properties into new object literal
            isEdit: !guest.isEdit
          }
        }
        return guest;
      })
    })
  }

  setNameAt=(name,id)=>{
    this.setState({
      guests:this.state.guests.map((guest)=>{
        if(id===guest.id){
          return{
            ...guest,
            name:name
          }
        }
        return guest
      })
    })
  }

  toggleFilter=()=>{
    this.setState({isFilterd: !this.state.isFilterd})
  }
  
  handleChange=(e)=>{
    this.setState({pendingGuest :e.target.value})
  }

  handleAddGuest=(event)=>{
    event.preventDefault();
    const id=this.newId();
    this.setState({
      guests:[
        {
        name:this.state.pendingGuest,
        id:id,
        isConfirmed:false,
        isEdit:false
      },
      ...this.state.guests
    ],
    pendingGuest:''
    })
  }
  handleRemoveGuest=(id)=>{
    {/* This Methd is when id is not given to obejcts*/}
    // this.setState({
    //   guests:[
    //     ...this.state.guests.slice(0, id),
    //     ...this.state.guests.slice(id+1)
    //   ]
    // })

    {/* When Id is given to Objects then this method will work */}

    this.setState({guests:this.state.guests.filter(guest=> id !== guest.id)})
  }

  getTotalInvited=()=>{
    return this.state.guests.length;
  }

  getAttendingGuests=()=>{
    //This Method is also good but we do with treehouse project
    // const isConfirmed=this.state.guests.filter((s)=>s.isConfirmed===true).length
    // return isConfirmed

    return this.state.guests.reduce((total, guest)=>guest.isConfirmed ? total+1 :total, 0)
  }
  getUnConfirmedGuests=()=>{
    const isNotconfirmed=this.state.guests.length
    return this.getTotalInvited() - this.getAttendingGuests()
  }
    render(){
        return ( 
        <>
           <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={this.handleAddGuest}>
            <input type="text" value={this.state.pendingGuest} placeholder="Invite Someone" onChange={this.handleChange}/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" checked={this.state.isFilterd} onChange={this.toggleFilter}/> Hide those who haven't responded
          </label>
        </div>
        <Counter totalGuests={this.getTotalInvited} Confirmed={this.getAttendingGuests} unConfirmed={this.getUnConfirmedGuests}/>
        <GuestList guests={this.state.guests} isFilterd={this.state.isFilterd} PendingGuest={this.state.pendingGuest} toggleConfirmationAt={this.toggleConfirmationAt} toggleEditAt={this.toggleEditAt} setNameAt={this.setNameAt} removeGuest={this.handleRemoveGuest}/>
      </div>
    </div>
        </>
     );
    }
    
}
 
export default App;