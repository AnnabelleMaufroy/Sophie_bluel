import { createForm } from "./form.js";

export async function loginPage(){
    const main = document.querySelector('main');
    main.innerHTML= '';
    const form = document.createElement('form');
    form.classList.add('formLogin');

    const title = document.createElement('h2');
    title.classList.add('titleLogin');
    title.textContent='Log In';
    form.appendChild(title);

    
    createForm(form,'email','E-mail');
    createForm(form,'password', 'Mot de passe');

    const button = document.createElement('button');
    button.classList.add('buttonConnect')
    button.textContent = 'Se connecter';
    form.appendChild(button);

    const forgetLink = document.createElement('a')
    forgetLink.classList.add('forgetLink');
    forgetLink.textContent ='Mot de passe oublié'
    form.appendChild(forgetLink);
    
    main.appendChild(form);
    
    
}