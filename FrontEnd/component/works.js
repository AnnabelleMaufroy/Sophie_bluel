import { fetchWorks } from "./api.js";

const gallery = document.querySelector('.gallery');

export async function displayWorks() {
    const works = await fetchWorks();

    for( let i=0; i<works.length; i++){
        const figure = document.createElement('figure');
        const figcaption = document.createElement('figcaption');
        const img = document.createElement('img');
        const work = works[i];

        img.src = work.imageUrl;
        img.alt = work.title;

        figcaption.textContent = work.title;
        
        
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    }
}