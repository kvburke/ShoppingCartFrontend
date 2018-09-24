import React from 'react';
import {Component} from 'react';


class Cart extends Component{
    constructor(props) {
        super(props)
        this.handleChecker=this.handleChecker.bind(this)

    }

    handleChecker(item) {
        console.log(item);
        this.props.setinput(item);
    }

    render(){
        this.value=this.props.value
        var Components2 =  this.props.myProp2.map(function (item) {
            return (<li key={item.id} onClick={()=>this.handleChecker(item.id)}>{item.name} {item.service} {item.price}</li>);
        }.bind(this));
        return(
            <div className="board">
                {Components2}

<button onClick={this.props.add.bind(this)}>Add</button>
                <button onClick={this.props.remove}>Remove</button>

            </div>

        )

    }
}
export default Cart;