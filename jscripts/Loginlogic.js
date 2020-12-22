const init=function()
{
    let flag=localStorage.getItem('flag');
    if(flag==1)
    {
        document.querySelector('.LoGup').textContent="Ajith";
        document.querySelector('.LoGin').textContent="Signout";
    }
}
function checkPassword()
{
    if(document.getElementById("name").value == username && document.getElementById("password").value == password)
  {
    localStorage.setItem('flag',1);
    alert("Login was Successful, Welcome Back!");
    window.open('../../TechNoJitsu.html');
    
  }
  else
  {
      alert("Login was Unsuccessful, please check your username and password");
  }
}

function logCheck()
{
    let flag=localStorage.getItem('flag');
    if(flag==1)
    {
        const flag2=confirm("Do you Wish to log out?");
        if(flag2==true)
        { 
            localStorage.setItem('flag',0);
           
        }
        else
        window.open('../../TechNoJitsu.html');
    }
    
}

document.addEventListener('DOMContentLoaded',function(){init();});
