import React, { Component } from 'react'

 class classClick extends Component {
     clickHandler(){
         console.log('clicked button')
     }
  render() {
    return (
      <di>
          <button onClick={this.clickHandler}>click me</button>

      </di>
    )
  }
}

export default classClick