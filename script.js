const form = document.querySelector("form")
const namePattern = /^[a-z]/i; 
const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const number = 123456789;
const pwd = "password";
const password = form.password.value;
const pattern = /^[A-Za-z][0-9][A-Za-z\d]{8,}$/;
form.onsubmit = (e) => {
    if(!(namePattern.test(form.f_name.value) || namePattern.test(form.l_name.value))){
        alert("Invalid name!")
    }
    
    else if(form.f_name.value == form.l_name.value){
        alert("Last name and first name cannot be same!")
    }

    else if((form.f_name.value).length < 5 || (form.l_name.value).length < 5){
        alert("Enter name more than 5 characters!!")
    }

    if(!(email.test(form.e_mail.value))){
        alert("Invalid E-mail!")
    }

    if((form.phone_no.value).length < 10 ){
        alert("Number has to be 10 digits!")
    }
    else if(Number(form.phone_no.value) == number){
        alert("Enter valid number!!")
    }

    if((pattern.test(form.password.value))){
        alert("Invalid password!")
    }
    if(form.password.value === form.con_password.value){
        alert("Password dont match")
    }
    if (! (form.password.value === form.f_name.value) || (form.password.value === form.l_name.value)){
        alert("Password cannot be same as name")
    }
    
    if( !(form.password.value === pwd)){
        alert("Password cannot be password")
    }
}
// Reuben10#@