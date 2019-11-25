import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
      }

      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"https://forms.westuc.com/wes_test/",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }
    
      resetForm(){
         this.setState({name: '', email: '', message: ''})
      }

    render() {
        return (
          <div className="App">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" 
                    onChange={this.onNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" 
                    onChange={this.onEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"
                    onChange={this.onMessageChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )
    }
    onNameChange(event) {
       this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
       this.setState({email: event.target.value})
    }
    
    onMessageChange(event) {
       this.setState({message: event.target.value})
    }
}

export default App;