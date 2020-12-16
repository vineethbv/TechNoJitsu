var particles = Particles.init({
	selector: '.background',
  color: '#DA0463'
});


function check(){
  var un = document.getElementsByClassName("name");
  var pw = document.getElementsByClassName("password");
  var username = "Admin"; 
  var password = "AdminOfPage*123";
  if ((un === username) && (pw === password)) {
    location.replace= "../../TechNoJitsu.html";
  }
  else {
      alert ("Login was Unsuccessful, please check your username and password");
  }
}