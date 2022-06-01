import React, { Component , PureComponent} from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'GiantPRO'
      }
    }

    componentDidMount(){
        setInterval(()  => {
            this.setState({
                name: 'GiantPro'
            })
        }, 2000)
    }
  render() {
    console.log('*************Parent Comp  render************')
    return (
      <div>
          Parent Component
          <RegComp name = {this.state.name} />
          <PureComp name = {this.state.name} />
          </div>
    )
  }
}

export default ParentComp