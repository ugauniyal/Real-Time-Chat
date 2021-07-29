var x = document.getElementsById("show");
x.onclick = Login;

function Login() {    
  
  if (document.getElementById("password").type == "password"){
    document.getElementById("password").type = "text";
  }

  else{
    document.getElementById("password").type = "password";
  }
}