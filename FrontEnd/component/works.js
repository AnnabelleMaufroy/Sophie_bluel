//Affichage des works
export async function displayWorks(container, works) {
    const containerWork = document.querySelector('.'+container);
    containerWork.innerHTML = '';

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
        containerWork.appendChild(figure);
    }
}