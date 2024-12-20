import { modalForm } from "./modalForm.js";
import { updateGallery } from "./updateGallery.js";

// Mini-gallery
export const modalGalerie = (works)=>{
    const divContainer = document.createElement('div');
    divContainer.classList.add('modalContent');

    const title = document.createElement('div');
    title.textContent = 'Galerie photo';
    title.classList.add('title');
    divContainer.appendChild(title);

    const elementContainer =  document.createElement('div');
    elementContainer.classList.add('gallerie-container');

    divContainer.appendChild(elementContainer);

    const hr = document.createElement('hr');

    const button = document.createElement('button');
    button.textContent = 'Ajouter une photo';
    button.classList.add('buttonAjoutPhoto');

    // Affichage modal du formulaire d'ajout
    button.addEventListener('click', async ()=>{
        divContainer.innerHTML = '';
        const form = await modalForm(); 
        divContainer.appendChild(form);
    });

    divContainer.appendChild(hr);
    divContainer.appendChild(button);

    //Apparition de la gallery et mise à jour
    setTimeout(() => {
         updateGallery(works);
    }, 0);

    return divContainer;
}