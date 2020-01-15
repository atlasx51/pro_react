import React, {Component} from 'react';


// component responsible for displaying the banner , parent components provide their children with data using props, and the data values are accesed through the props property, accesed via the this keyword. TodoBanner expects to receive two props a name prop which is the user name and a tasks prop which contains the set of tasks and which is filtered to display the number that are incomplete, by using this.props.name to display the value of the name prop 
export class TodoBanner extends Component {
    render = ()=>
    <h4 className="bg-primary text-white text-center p-2">
        {this.props.name}'s To Do List({this.props.tasks.filter(t=> !t.done).length}items to do)
    </h4>
}