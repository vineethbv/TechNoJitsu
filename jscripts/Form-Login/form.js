var particles = Particles.init({
	selector: '.background',
  color: '#DA0463'
});
var username = "Admin"; 
var password = "AdminOfPage*123";

function checkPassword()
{
  if(document.getElementsById("name").value == username && document.getElementsById("name").value == password)
  {
    window.open("/TechNoJitsu.html");
  }
  else
  {
      alert("Login was Unsuccessful, please check your username and password");
  }
}