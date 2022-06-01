import React from "react";


const Hello = () => {
    //     return(
    //         <div>
    //             <h1>Hello react, oti gba alejo oo</h1>
    //         </div>
    //     )

    return React.createElement(
        'div',
        { id: "Hello", classname: "mygreet" },

        React.createElement(null, 'h1', 'Hello React oti gba alejo oo')
    )

}

export default Hello
