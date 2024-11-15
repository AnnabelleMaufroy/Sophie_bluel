import { displayModal } from "./modal.js";

export function getToken(){
    const token = localStorage.getItem('token');
    const categorieButtons = document.querySelectorAll('.categorieButton');
    if (token) {
        for (let i = 0; i < categorieButtons.length; i++) {
            categorieButtons[i].style.display = 'none';
        }
        const logout = document.querySelector(".login_link");
        logout.textContent='logout';

        const modification = document.createElement('a');
        modification.classList.add('modificationLink');
        modification.textContent='modifier';

        const title = document.querySelector("#portfolio h2");
        title.appendChild(modification);
        
        modification.addEventListener('click', () => {
            console.log('Modification des projets');
            displayModal('test','modalModification');
        });

    }else {
        for (let i = 0; i < categorieButtons.length; i++) {
            categorieButtons[i].style.display = 'block';
        }
    }
}