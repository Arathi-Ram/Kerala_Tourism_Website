const signupForm = document.getElementById("signUp-form");
const Fname = document.getElementById("fname");
const Lname = document.getElementById("lname");
const signEmail = document.getElementById("inputEmail");
const Pass1 = document.getElementById("inputpass1");
const Pass2 = document.getElementById("inputPass2");
const Mobile = document.getElementById("inputMob");


// signupForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     checkEmpty();
// });
signupForm.addEventListener("keyup",(e)=>{
    e.preventDefault();

    checkSignInputs();
});

function checkSignInputs(){
    //assign input values to a variable to use in this method for checking
    const signEmailValue = signEmail.value.trim();
    const FnameValue = Fname.value.trim();
    const LnameValue = Lname.value.trim();
    var Pass1Value = Pass1.value.trim();
    const Pass2Value = Pass2.value.trim();
    const MobileValue = Mobile.value.trim();

    // check if email is Valid with referencing the regex method for email which is isSignEmailValid()
    if(signEmailValue === ""){
        setErrorFor(signEmail,"E-mail field cannot be empty!");
        }
    else if(!isSignEmailValid(signEmailValue)){
        setErrorFor(signEmail, "Email is not valid!")
    }
    else {
        setSuccessFor(signEmail);
    }


    if(FnameValue === ""){
        setErrorFor(Fname, "Field cannot be empty!");
    }
    else{
        setSuccessFor(Fname);
    }
    if(LnameValue === ""){
        setErrorFor(Lname, "Field cannot be empty!")
    }
    else{
        setSuccessFor(Lname);
    }
   
    if(Pass1Value === ""){
        setErrorFor(Pass1,"Field cannot be empty!");
    }
    else if(!isPassValid(Pass1Value)){
        setErrorFor(Pass1, "Password is not valid");
    }
    
    else{
        setSuccessFor(Pass1);
    }
    
    if(Pass2Value === ""){
        setErrorFor(Pass2, "Field cannot be empty!");
    }else if(Pass1Value !== Pass2Value){
        setErrorFor(Pass2, "Password does not match");
    }
    else{
        setSuccessFor(Pass2);
    }

    if(MobileValue === ""){
        setErrorFor(Mobile, "Field cannot be empty!");
    }
    else if(!isSignMobValid(MobileValue)){
        setErrorFor(Mobile,"Mobile number must be in the form 999.999.9999,999-999-9999 or 999 999 9999")
    }
    else{
        setSuccessFor(Mobile)
    }
   
    
}
// create the setErrorFor to make custom mesages for inputs with errors
// add error msg inside small tag
    function setErrorFor(input, message){
        const signFormControl = input.parentElement; // .signUp-form-control div
        const small = signFormControl.querySelector("small");

        small.innerText = message;

        signFormControl.className = "signUp-form-control error";
    }
// create the setSuccessFor to make field success and remove error small text for successful inputs

    function setSuccessFor(input){
        const signFormControl = input.parentElement;
        signFormControl.className = "signUp-form-control success";
    }
// iSignEmailVaid sets the regexp to check if email is valid or not
     function isSignEmailValid(signEmail){
        return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+([a-z]{2-3})?$/.test(signEmail);
     }

     function isSignMobValid(Mobile){
         return /^([0-9]{3}[\s-.]?)([0-9]{3}[\s-.]?)([0-9]{4})$/.test(Mobile);
     }
    
     function isPassValid(Pass1){
        return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/.test(Pass1);
     }
//START OF SHOW PASSWORD TOGGLE ICON FUNCTION----------
     function _id(name){
         return document.getElementById(name);
     }
     function _class(name){
         return document.getElementsByClassName(name);
     }
     _class("password-toggle")[0].addEventListener("click",function(){
        _class("password-toggle")[0].classList.toggle("active");
        if(_id("inputpass1").getAttribute("type") == "password"){
            _id("inputpass1").setAttribute("type","text");
        }
        else{
            _id("inputpass1").setAttribute("type","password");
        }
     });

     _class("password-toggle-two")[0].addEventListener("click",function(){
        _class("password-toggle-two")[0].classList.toggle("active");
        if(_id("inputPass2").getAttribute("type") == "password"){
            _id("inputPass2").setAttribute("type","text");
        }
        else{
            _id("inputPass2").setAttribute("type","password");
        }
     });
    

//END OF SHOW PASSWORD TOGGLE ICON FUNCTION----------     


// START of PASSWORD Strength METER-----------
    
    let state = false;
    let passwordStrength = document.getElementById("pass-strength");
    let lowerUpperCase = document.querySelector(".low-upper-case i");
    let number = document.querySelector(".one-number i");
    let specialChar = document.querySelector(".one-special-char i");
    let eightChar = document.querySelector(".eight-character i");   

    Pass1.addEventListener("keyup",function(){
        let passwordValue = Pass1.value;
        checkStrength(passwordValue);
    });

     function checkStrength(Pass1){
         let strength = 0;
         //if password contains lower and upper case character
         if(Pass1.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
             strength +=1;
             lowerUpperCase.classList.remove("fa-circle");
             lowerUpperCase.classList.add("fa-check");
         }
         else{
             lowerUpperCase.classList.add("fa-circle");
             lowerUpperCase.classList.remove("fa-check");
         }
        //  if password has a number
         if(Pass1.match(/([0-9])/)){
             strength +=1;
             number.classList.remove("fa-circle");
             number.classList.add("fa-check");

         }else{
             number.classList.add("fa-circle");
             number.classList.remove("fa-check");
         }

        //  If password has special characters
        if(Pass1.match(/([!,@,#,$,%,^,&,*])/)){
            strength +=1;
            specialChar.classList.remove("fa-circle");
            specialChar.classList.add("fa-check");
        }else{
            specialChar.classList.add("fa-circle");
            specialChar.classList.remove("fa-check");
        }
        // If password i more than 8
        if(Pass1.length >7){
            strength +=1;
            eightChar.classList.remove("fa-circle");
            eightChar.classList.add("fa-check");
        }else{
            eightChar.classList.add("fa-circle");
            eightChar.classList.remove("fa-check");
        }

        if(strength == 0){
            passwordStrength.style = "width:0%";
        }
        else if(strength == 2){
            passwordStrength.classList.remove("progress-bar-warning");
            passwordStrength.classList.remove("progress-bar-success");
            passwordStrength.classList.add("progress-bar-danger");
            passwordStrength.style = "width:10%";
        }
        else if(strength == 3){
            passwordStrength.classList.remove("progress-bar-success");
            passwordStrength.classList.remove("progress-bar-danger");
            passwordStrength.classList.add("progress-bar-warning");
            passwordStrength.style = "width:60%";
        }
        else if(strength == 4){
            passwordStrength.classList.remove("progress-bar-warning");
            passwordStrength.classList.remove("progress-bar-danger");
            passwordStrength.classList.add("progress-bar-success");
            passwordStrength.style = "width: 100%";
        }
        
     }
// END of PASSWORD STRENGTH METER-------------
