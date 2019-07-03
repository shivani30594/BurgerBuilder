import React from 'react';

const person = (props) => {
    return (
        <div>
        <h1>Hi, I am a person. My name is {props.name}. I am {props.age} years old.</h1>
        <p>{props.children}</p>
        </div>
    )
}

export default person;