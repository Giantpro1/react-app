
import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'GiantPro'
      }
      console.log('LifecycleA constructor')
    }
    static getDeriveStateFromProps(props, state){
        console.log('LifecycleA getDeriveStateFromProps')
        return null
    }
        componentDidMount(){
            console.log('LifecycleA componentDidMount')
        }

        shouldComponentUpdate(){
          console.log('LifecycleA,shouldComponentUpdate')
          return true
        }
        getSnapshotBeforeUpdate(prevprops, prevstate){
          console.log('LifecycleA, getSnapshotBeforeUpdate')
          return null
        }
        componentDidUpdate(){
          console.log('LifecycleA,componentDidUpdate')
        }
        changeState = () =>{
          this.setState({
            name: 'codeVolution'
          })
        }
  render() {
      console.log('LifecycleA render')
    return (
        <div>
             <div> Lifecycle A </div>
             <button onClick={this.changeState}>change state</button>
             <LifecycleB/>
        </div>
     
    )
  }
}

export default LifecycleA