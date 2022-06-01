import React from 'react'

function NameList() {
    const person =[
        {
            id:1,
            name:'Giantpro',
            Age:18,
            skills:'javascript'
        },
        {
            id:2,
            name:'kingbliq',
            Age:17,
            skills:'php'
        },
        {
            id:3,
            name:'praize',
            Age:19,
            skills:'bootsrap'
        },
        {
            id:4,
            name:'tobi',
            Age:18,
            skills:'styling'
        }


    ]
    const personList= people.map(person=><h2>I am {person.name}. am{person.Age}years old. and my specialist is{person.skills}</h2>)
  return (
    <div>{personList}</div>
  )
}

export default NameList