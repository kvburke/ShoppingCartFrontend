import $ from "jquery";

export const consumedata = (array) => {
    console.log("You clicked on user: ", user.first);
var jsonObj;

    $.getJSON('http://localhost:8080/permutation?input="a"', function(data) {
        //data is the JSON string
        jsonObj = data;
        console.log(data);
        return data;
    });


    return {
        type: 'GET_DATA',
        payload: jsonObj;

    }


};