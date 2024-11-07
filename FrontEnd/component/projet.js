import { fetchWorks } from "./api.js";
import { displayWorks } from "./works.js";
import { buttonCategories } from "./categories.js";

export async function workPage(){
    const main = document.querySelector('main');
    const workHTML = await fetch('./component/pages/projet.html');
    const workContent = await workHTML.text();

    main.innerHTML = workContent;
    
    const works = await fetchWorks();
    displayWorks('gallery', works);
    buttonCategories();
}