// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import ClickCount from './component/ClickCount';
import HoverCounter from './component/HoverCounter';
// import FrParentIn from './component/FrParentIn';




class App extends Component {
  render(){
    return (
      <div className='App'>
      <ClickCount/>
      <HoverCounter/>
      </div>
      
     );
  }
  
}

export default App;
