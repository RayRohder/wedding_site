// A component is a function that retuns JSX
import React from 'react';
//import './Countdown.css'

class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Email verstuurd: \n' + this.state.value);
    this.setState("");
    event.preventDefault();
  }

  render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         Uw vraag en/of:
       </label><br/>
       <textarea class="rsvpFormInput" value={this.state.value} onChange={this.handleChange} /><br/>
       <div class="sendButton">
        <input type="submit" value="Verstuur" />
       </div>
     </form>
   );
 }
}

export default RsvpForm;
