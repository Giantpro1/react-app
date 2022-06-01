import React, {component} from "react";

class welcome extends component{
    render(){
        const{name,profName}=this.props
        return <h1>welcome{name} a.k.a {profName}</h1>
    }
}

export default welcome