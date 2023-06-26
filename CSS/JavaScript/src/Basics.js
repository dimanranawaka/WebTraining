//=======OOP========
//Literal Syntax , Class Base(ES6) , Constructor Functions
//=========================

let man = {
    nic:90,
    name:'Diman',
    age:26,
    fav:['Games','Coding','Traveling'],
    friendData:{
        nic:90,
        name:'Dasun',
        age:20,
        fav:['Games','Coding','Traveling'],
    },
    doIt:function () {
        console.log('Fires');
    }
};
console.log(man);
console.log(man.age);
console.log(man.doIt());
console.log(man.friendData);