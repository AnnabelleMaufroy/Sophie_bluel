import { createForm } from "./form.js";
import { loginUser } from "./api.js";

export async function loginPage(){
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.classList.add('sectionForm');
    main.innerHTML= '';
    const form = document.createElement('form');
    form.classList.add('formLogin');

    const title = document.createElement('h2');
    title.classList.add('titleLogin');
    title.textContent='Log In';
    section.appendChild(title);

    
    createForm(form,'email','E-mail');
    createForm(form,'password', 'Mot de passe');

    const button = document.createElement('button');
    button.classList.add('buttonConnect')
    button.type ='submit';
    button.textContent = 'Se connecter';
    form.appendChild(button);
    
    section.appendChild(form);

    const forgetLink = document.createElement('a')
    forgetLink.classList.add('forgetLink');
    forgetLink.textContent ='Mot de passe oublié'
    section.appendChild(forgetLink);

    main.appendChild(section);

    form.addEventListener('submit', async (event)=>{
        event.preventDefault();
        const formData = new FormData(form);
        try {
            const userData = await loginUser(formData);
            console.log('Connexion réussie', userData);
        } catch (error) {
            console.error('Erreur de connexion', error);
        }
    });
}