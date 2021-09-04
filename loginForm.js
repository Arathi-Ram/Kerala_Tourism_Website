const loginForm = document.getElementById("login-form");
const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");
// const formControl = document.getElementsByClassName("login-form-control")
// console.log("[0] is: "+ formControl[1]);
loginForm.addEventListener("keyup",(e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get values from inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ""){
        //show error
        //add error class
        setErrorFor(email,"E-mail field cannot be blank");
        // alert("Empty Field!")
    } 
    else if(!isEmailValid(emailValue)){
        setErrorFor(email, "Email is not valid!")
    }
    else {
        //add success class
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank");
    }
    else{
        setSuccessFor(password);
    }

    
}
// set error function
function setErrorFor(input, message){
    const formControl = input.parentElement; //.login-form-control div
    // console.log("parent is:" + formControl );
    const small = formControl.querySelector("small");
    
    //add error msg inside small tag
    small.innerText = message;

    //add error class
    formControl.className = "login-form-control error";
}

// set success function
function setSuccessFor(input){
    const formControl = input.parentElement; //.login-form-control div
    formControl.className = "login-form-control success";    
}

// if email is valid function below:
function isEmailValid(email){
    // let regexp =/^([A-Za-z0-9\.-]+)@\([A-Za-z0-9\-]).([a-z]{2-3})(.)$/
    return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+([a-z]{2-3})?$/.test(email);
}

