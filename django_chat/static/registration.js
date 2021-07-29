var x = document.getElementsById("show");
x.onclick = Register;

function Register() {    
  
  if (document.getElementById("password").type == "password"){
    document.getElementById("password").type = "text";
  }

  else{
    document.getElementById("password").type = "password";
  }
}