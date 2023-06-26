let myList = document.getElementById('my-list');
let counter=1;
document.getElementById('bnt-add').addEventListener('click',()=>{
    let item = document.createElement('li');
    item.textContent='Element'+counter;
    item.style.backgroundColor='white';
    myList.appendChild(item);
    counter++;
})