let myList = document.getElementById('my-list');
document.getElementById('bnt-add').addEventListener('click',()=>{
    let item = document.createElement('li');
    item.textContent='Element';
    item.style.backgroundColor='red';
    myList.appendChild(item);
})