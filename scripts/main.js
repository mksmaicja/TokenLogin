function login(token) {
    setInterval(() => {
    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
    location.reload();
    }, 2500);
}

alert("enter token! (type '0' to stay on account)");

var a= prompt("enter token! (leave empty to stay on account)", "token");
if (a == "0")
{

}
else
{
    login(a);
}
        

