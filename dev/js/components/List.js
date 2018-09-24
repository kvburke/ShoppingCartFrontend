import React from 'react';
import {Component} from 'react';


class List extends Component{
    constructor(props) {
        super(props)
        this.handleChecker=this.handleChecker.bind(this)

    }


    handleChecker(item) {
        console.log(item);
    }


    render(){
var Components =  this.props.myProp1.map(function (item) {
    return (<li key={item.id} onClick={()=>this.props.select(item.id, item.item, item.service, item.price)}>{item.item} {item.service} {item.price}</li>);
}.bind(this));
return(
<div className="board">
    {Components}
</div>
)

}
}
export default List;