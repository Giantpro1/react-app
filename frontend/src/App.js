// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import ParentComp from './component/ParentComp';
// import PureComp from './component/PureComp';
// import Table from './component/Table';
// import FragmentDemo from './component/FragmentDemo';




class App extends Component {
  render(){
    return (
      <div className='App'>
        <ParentComp/>
        {/* <PureComp/> */}

     {/* <FragmentDemo /> */}
     
      </div>
      
     );
  }
  
}

export default App;
