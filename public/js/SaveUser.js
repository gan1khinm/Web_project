const queryString = window.location.search;
const urlParametrs = new URLSearchParams(queryString);

const email = urlParametrs.get("email")
const login = urlParametrs.get("login")

if(login && email){
    localStorage.setItem("email", urlParametrs.get("email"));
    localStorage.setItem("login", urlParametrs.get("login"));
}