var particles = Particles.init({
	selector: '.background',
  color: '#DA0463'
});
var username = "Admin"; 
var password = "AdminOfPage*123";

function checkPassword(form)
{
  if(form.name.value == username && form.pass.value == password)
  {
    window.open("/TechNoJitsu.html");
  }
  else
  {
      alert("Login was Unsuccessful, please check your username and password");
  }
}