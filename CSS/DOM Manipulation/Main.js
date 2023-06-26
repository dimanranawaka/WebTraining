let headingEl = document.getElementById('heading');
let btnEl = document.querySelector('button');

btnEl.addEventListener('click',() => {
    headingEl.textContent="This is the new content";
})