let numbers = [1,2,3,4,5,6,7,8,9,10];

let oddNumbers=numbers.filter(function (data){
    return data % 2 !==0;
})
console.log(oddNumbers);