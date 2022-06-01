import React from 'react'


// function Greet(){

//     return <h1>Hello Giantpro</h1>
// }
 const Greet = props => {
     const{ name,profName}=props
     return ( <div>
<h1>Hello {name} a.k.a {profName}</h1>
{props.children}
     </div>)

 }
export default Greet