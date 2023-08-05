function login(token) {
    setInterval(() => {
    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
    location.reload();
    }, 2500);
}

alert("press INSERT on login screen to login via token!");

document.addEventListener('keydown', (event) => {
    if (event.key == "Insert")
    var a= prompt("enter your token: ", "token");
        login(a);
  }, false);