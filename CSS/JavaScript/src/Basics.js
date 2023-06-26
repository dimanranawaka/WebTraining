let cart =['Apple','Mango','Banana'];
// let selectedData= cart.find((e)=>e==='Apple');// Arrow Function
// console.log(selectedData);

let selectedData = cart.find(function (e) {
    return e==='Apple';
})
console.log(selectedData);