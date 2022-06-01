


import React, { Component } from 'react'

class LifecycleB extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        name: 'GiantPro'
     }
     console.log('LifecycleB constructor')
   }
   static getDeriveStateFromProps(props, state){
       console.log('LifecycleB getDeriveStateFromProps')
       return null
   }
       componentDidMount(){
           console.log('LifecycleB componentDidMount')
       }
    shouldComponentUpdate(){
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate){
      console.log('LifecycleB  getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate')
    }
 render() {
     console.log('LifecycleB render')
   return (
     <div> Lifecycle B </div>
   )
 }
}

export default LifecycleB