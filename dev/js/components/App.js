import React from 'react';
import Inventory from './Inventory';
import Login from './Login';
import Create from './Create';

const App = () => (

    <div>
        <p>Phone Repair Services</p>

        <Inventory/>
        <p>Login</p>
        <Login/>
        <p>Create</p>
        <Create/>
    </div>
);

export default App;
