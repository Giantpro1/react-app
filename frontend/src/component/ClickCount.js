import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class ClickCount extends Component {

  render() {
      const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>
       {this.props.name}   Click Count {count} </button>   
          </div>
    )
  }
}

export default WithCounter(ClickCount, 5) 