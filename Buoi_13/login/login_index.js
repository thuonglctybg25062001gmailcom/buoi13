const username = document.querySelector("#emailInput");
const password = document.querySelector("#passwordInput");
const messageError = document.querySelectorAll(".error-message");
const buttonSubmit = document.querySelector("#btnSignIn")
const elementEmailInput = document.querySelectorAll('.signIn-form div input');
console.log("user",username);
console.log("pass",password);
console.log("message",messageError);
console.log(elementEmailInput);


buttonSubmit.onclick = (e) =>
{
    
e.preventDefault()
    if ( username.value.trim() === "" && password.value.trim() === "")
    {
        messageError.forEach(element => {
            element.classList.add("show");
            
        })
        // elementEmailInput.style.backgroundColor = "red";
        username.style.backgroundColor = "red";
        password.style.backgroundColor = "red";
        
    }
    else if(username.value.trim() !=="admin" && password.value.trim() !=="admin")
    {
        messageError.forEach(element => {
            element.classList.add("show");
            
        })
        // elementEmailInput.style.backgroundColor = "red";
        username.style.backgroundColor = "red";
        password.style.backgroundColor = "red";
    }
    else if(username.value.trim() ==="admin" && password.value.trim() ==="admin")
    {

        window.location.assign("/Buoi_13/index.html");
    }

} 





// const button = document.getElementById('btnSignIn');
// button.addEventListener('click', () => {
//     const element = document.querySelector('emailInput');
//     element.style.backgroundColor = 'red';
// });


{/* <button id="myButton" class="float-left submit-button" >Home</button>

<script type="text/javascript">
    document.getElementById("myButton").onclick = function () {
        location.href = "www.yoursite.com";
    };
</script> */}