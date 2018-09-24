/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
import axios from 'axios';
export default function () {
var list=[];
   const request=axios.get('http://localhost:8080/permutation?input="a"').then(function (response) {


        return response.data;

    })
list=request;
console.log(list);
    return list;

}