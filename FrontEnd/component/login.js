import { createForm } from "./form.js"
import { loginUser } from "./api.js"
import { workPage } from "./projet.js"
import { displayModal } from "./modal.js"

export async function loginPage() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.classList.add("sectionForm");
    main.innerHTML = ""
    const form = document.createElement("form");
    form.classList.add("formLogin");

    const title = document.createElement("h2");
    title.classList.add("titleLogin");
    title.textContent = "Log In";
    section.appendChild(title);

    createForm(form, "email", "E-mail");
    createForm(form, "password", "Mot de passe");

    const button = document.createElement("button");
    button.classList.add("buttonConnect");
    button.type = "submit";
    button.textContent = "Se connecter";
    form.appendChild(button);

    section.appendChild(form);

    const forgetLink = document.createElement("a");
    forgetLink.classList.add("forgetLink");
    forgetLink.textContent = "Mot de passe oublié";
    section.appendChild(forgetLink);

    main.appendChild(section);

    //Soumission du formulaire de connexion
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const dataForm = {
            email: form.email.value,
            password: form.password.value,
        };
        try {
            const userData = await loginUser(dataForm);
            console.log("Connexion réussie", userData);
            localStorage.setItem("token", userData.token);
            workPage();
        } catch (error) {
            console.error("Erreur de connexion", error.message);
            displayModal('modalLogin');
            const modalContent = document.querySelector('.modalLogin');
            const content = document.createElement('div');
            content.textContent = 'Utilisateur ou mot de passe erroné';
            modalContent.appendChild(content);
        }
    });
}