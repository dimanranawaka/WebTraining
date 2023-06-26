//=======OOP========
//Literal Syntax , Class Base(ES6) , Constructor Functions
//=========================

function Man(name,address,nic){ //Constructor Based Functions
    this.name = name;
    this.address = address;
    this.nic = nic;
};
let data = new Man('Diman','Galle',50);
console.log(data);