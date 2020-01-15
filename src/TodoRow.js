import React, {Component} from 'react'
// this component is responsible of displaying a single row in the table that shows details of a to-do item. the data that is received by a child commponent through its props is read-only and must not be altered.
export class TodoRow extends Component{
    render = () =>
    <tr>
<td>{this.props.item.action}</td>
    <td><input type="checkbox" checked={this.props.item.done} onChange={()=> this.props.callback(this.props.item)}/></td>
    </tr>
}