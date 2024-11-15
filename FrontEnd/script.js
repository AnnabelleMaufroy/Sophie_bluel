import { workPage } from "./component/projet.js";
import { loginPage } from "./component/login.js";

async function init(){
    workPage();
    localStorage.removeItem('token');
    const loginLink = document.querySelector('.login_link');
    loginLink.addEventListener('click', ()=>{
        loginPage();
    });
}
init();

