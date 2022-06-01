import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Username:'',
          Comment:'',
          Topics:''
       }
     }
     handleUsernameChange = (event) =>{
            this.setState({
                Username: event.target.value
            })
     }
     handleCommentChange=(event)=>{
         this.setState({
             Comment:event.target.value
         })
     }
     handleTopicsChange= event=>{
         this.setState({
             Topics:event.target.value
         })
     }
     handleSubmit= event => {
         alert(`${this.State.Username} ${this.State.Comment} ${this.State.Topics}`)
         event.preventDefault()
     }
  render() {
      const {Username,Comment,Topics}=this.state
    return (
     <form onSubmit={this.handleSubmit}>
          <div>
     <label>UserName:</label>
     <input type='text' value={Username} onChange={this.handleUsernameChange}/>
      </div>
      <div>
       <label>Comment:</label>
          <textarea value={Comment} onChange={this.handleCommentChange}>
            
          </textarea>
      </div>
      <div>
          <label>Topics:</label>
          <select value={Topics} onChange={this.handleTopicsChange}>
              <option value="react js">React js</option>
              <option value="angular js">Angular js </option>
              <option value="vue">Vue</option>
          </select>
      </div>
      <div><button type="Submit">Submit</button></div>
     </form>
    )
  }
}

export default Form