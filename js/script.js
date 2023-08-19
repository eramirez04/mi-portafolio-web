function registrar(){
  let usuario = document.getElementById("usuario").value
  localStorage.setItem("usuario",usuario);


  window.location="bienvenido.html";
}