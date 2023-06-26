let form = document.getElementById('student-form');
form.addEventListener('submit',function (event) {
    event.preventDefault();
    let nameEl = form.elements['fullName'];
    let emailEl = form.elements['email'];
    console.log("Full Name : "+nameEl.value);
    console.log("email : "+emailEl.value);
    form.reset();
})