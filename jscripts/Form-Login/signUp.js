localStorage.setItem("passCheck",0);
function passwordVerify()
{
    if(document.getElementById('password').value==document.getElementById('conPassword').value)
    {
        localStorage.setItem("passCheck",1);
        document.querySelector('.chekPass').textContent=" Confirmed";
    }
    else
    {
        document.querySelector('.chekPass').textContent=" Password Doesn't Match!";
    }
}
function createAcct(){
    localStorage.setItem("passCheck",0);
}