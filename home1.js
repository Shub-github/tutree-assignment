let userDetails = sessionStorage.getItem('u');
userDetails = JSON.parse(userDetails);

// console.log("INSDE APP FILE 2 ", userDetails);
document.getElementById("firstName").innerText = userDetails.name;
document.getElementById("lastName").innerText = userDetails.lastName;
document.getElementById("email").innerText = userDetails.email;
document.getElementById("password").innerText = userDetails.password;