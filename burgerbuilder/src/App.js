import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [
            {name:'shivnai', age:25},
            {name:'Pranav', age:26},
        ]
    }

    SwitchNameHandler = () => {
console.log("was clicked")
    }

    render(){
        return ( 
            <div className = "App">
                <h1> Hi, I 'm a Rect App </h1>  
                <Person name="shivani" age="27"/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person>My hobbies: Painting</Person>
                <button onClick={this.SwitchNameHandler}>Switch Me</button>
            </div>
        );
    }
}

export default App;