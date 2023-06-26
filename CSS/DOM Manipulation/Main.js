
//let divEl1 = document.getElementsByTagName('div')[0];
let divEl1 = document.getElementById('my-div');
divEl1.addEventListener('mouseover',()=>{
    divEl1.style.backgroundColor='green';
});

divEl1.addEventListener('mouseout',()=>{
    divEl1.style.backgroundColor='red';
});

divEl1.addEventListener('mousemove',(e)=>{
    let x=e.clientX;
    let y=e.clientY;
    console.log('X :'+x);
    console.log('Y :'+y);
});