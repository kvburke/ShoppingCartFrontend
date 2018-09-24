import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import List from './List';
import Cart from './Cart';


class Inventory extends Component{
    constructor(props) {
        super(props)

        this.state = {
            items: [{id: 1, item:" Iphone 6", service: "Cracked screen", price: 49.99},{id:2, item: "Iphone 7", service: "Cracked Screen", price: 59.99}, {id:3, item: "Iphone 6", service: "Battery Replacement", price: 59.99},  {id:4, item: "Iphone 7", service: "Battery Replacement", price: 39.99} ],
            cart: [],
            inputValue: '',
            idValue: '',
            itemValue:'',
            serviceValue:'',
            priceValue:''

        }
        this.add= this.add.bind(this);
        this.remove= this.remove.bind(this);
        this.setInput = this.setInput.bind(this);
        this.selectPurchase = this.selectPurchase.bind(this);
        this.order = this.order.bind(this);
       // this.orderloop = this.orderloop.bind(this);

        axios.get('http://localhost:8080/products').then(res =>{
            this.setState({items: res.data});
        });
    }

    selectPurchase(id, item, service, price){
        console.log("set input");
        this.setState({idValue: id});
        this.setState({itemValue: item});
        this.setState({serviceValue: service});
        this.setState({priceValue: price});

    }



    setInput(input){
console.log("set input");
        this.setState({idValue: input});
    }


    add(){

        let array1= this.state.cart;
        var item = {id : this.state.idValue,
            item : this.state.itemValue,
            service: this.state.serviceValue,
            price: this.state.priceValue
        };

this.order(item);
        array1.push(item);


    this.setState({cart: array1});
    }

    remove(){
    let array1=this.state.cart.slice();
    array1.pop();
    this.setState({cart:array1});

        let data = JSON.stringify({
            order : this.state.idValue

        })


    axios.post('http://localhost:8080/remove?id='+this.state.idValue , data, {

            headers: {
                'Content-Type': 'application/json',
            }
        });
    }



    updateIdValue(evt) {
        this.setState({
            idValue: evt.target.value
        });
    }

    updateItemValue(evt) {
        this.setState({
            itemValue: evt.target.value
        });
    }

    updateServiceValue(evt) {
        this.setState({
            serviceValue: evt.target.value
        });
    }

    updatePriceValue(evt) {
        this.setState({
            priceValue: evt.target.value
        });
    }

    updateUsernameValue(evt) {
        this.setState({
            usernameValue: evt.target.value
        });
    }

    //orderloop(username){
  //      console.log('executing orderloop')
//var size=this.state.cart.length;
        //var loop= this.state.cart.map(function(order) {
           // size--;
         //   if(size==0) {
       //         this.order(order, username)
     //       }
   //     }.bind(this));

 //   }

    order(order, username) {
        order.username=username;
        console.log(order.service);
        let data = JSON.stringify({
                Product: order

            })

            axios.post('http://localhost:8080/order?id='+order.id+'&item='+order.item+'&service='+order.service+'&price='+order.price, data, {

                headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

    }
    render(){
        return(
        <div>
            <b>List</b>
            <List myProp1={this.state.items} select={this.selectPurchase}/>
            <b>Cart</b>
            <Cart myProp2={this.state.cart} add={this.add} remove={this.remove} value={this.state.inputValue} setinput={this.setInput}/>


            <br></br>

            <p>ID Value</p>
            <input value={this.state.idValue} onChange={evt => this.updateIdValue(evt)}/>
            <p>Item</p>
            <input value={this.state.itemValue} onChange={evt => this.updateItemValue(evt)}/>
            <p>Service</p>
            <input value={this.state.serviceValue} onChange={evt => this.updateServiceValue(evt)}/>
            <p>Price</p>
            <input value={this.state.priceValue} onChange={evt => this.updatePriceValue(evt)}/>
            <p>Username</p>
            <input value={this.state.usernameValue} onChange={evt => this.updateUsernameValue(evt)}/>

        </div>);
    }


}

export default Inventory;