
// .......................
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");



function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function validateSignUp(e) 
{
    e.preventDefault();

    let userFirstName = document.getElementById("uname2").value;
    let userLastName = document.getElementById("uname3").value;
    let userEmail = document.getElementById("emailId").value;
    let userPassword=document.getElementById("pass2").value;
    const patt = /^[A-Za-z]\w{7,14}$/;
    if(userFirstName.length<4)
    {
        console.log("SignUp Firstname error");
        console.log('USERNAME INSIDE ', userFirstName,);
        return alert("Your First name length is less then 4");
    }


     if( userLastName.length<4)
    {
        console.log("Lastname error");
        console.log('USERNAME INSIDE ', userLastName,);
        return alert("Your Last name length is less than 4");
    }

    // email

    if(userEmail!=="@")
    {
        console.log("enter valid email Id");
    }

    // password

    if(!userPassword.match(patt))
    {
        console.log('PASSWORD INDIE', userPassword)
        return alert("Your password is incorrect");
    }
    
    let userDetails = {
        name: userFirstName,
         lastName: userLastName,
         email: userEmail,
         password: userPassword }
        userDetails = JSON.stringify(userDetails)
        // console.log(userDetails);
        sessionStorage.setItem('u', userDetails);

         return window.location.replace("file:///F:/web%20development/3/index.html");

}

//login function......................


function validateLogin(e)
{
    e.preventDefault();

            let user = document.getElementById("uname1").value;
            let pass1 = document.getElementById("pass1").value;
            const patt = /^[A-Za-z]\w{7,14}$/;
            let  storeDetails =sessionStorage.getItem('u');
            storeDetails = JSON.parse(storeDetails);
            
            if(storeDetails === undefined || storeDetails === null){
                return alert("No user has been registered")
            }
           
            // why class tag not working
            console.log("USERNAME ", user);
            console.log('PASSWORD', pass1);
            if(user.length < 5){
                console.log("username error");
                console.log('USERNAME INSIDE ', user);
                return alert("Your username is incorrect");
            }
            // password condition
            // password must be between 7-14 and it shouldn't contain any special character.
            if(!pass1.match(patt))
            {
                console.log('PASSWORD INDIE', pass1)
                return alert("Your password is incorrect");
            }

            if(user==storeDetails.email && pass1==storeDetails.password)
            {
                // console.log("signup details mathching");
                return window.location.replace("file:///F:/web%20development/3/index.html");
                
            }
            else
            return window.location.replace("file:///F:/web%20development/3/home.html");
            //  console.log("redirecting to login page details page");
            
            
}













