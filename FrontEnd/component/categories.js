import { fetchCategories } from "./api.js";
import { fetchWorks } from "./api.js";
import { displayWorks } from "./works.js";

export async function buttonCategories(){
    const categories = await fetchCategories();
    const categoriesContainer = document.createElement('div');
    categoriesContainer.classList.add('categories');

    // Création bouton Tous
    const buttonAll = document.createElement('button');
    buttonAll.classList.add('categorieButton');
    buttonAll.textContent = 'Tous';
    buttonAll.dataset.categorieId = 'Tous';
    categoriesContainer.appendChild(buttonAll);

    //Création bouton catégories
    for( let i =0; i < categories.length; i++){
        const button = document.createElement('button');
        const categorie = categories[i];

        button.classList.add('categorieButton');   

        button.textContent = categorie.name;
        button.dataset.categorieId = categorie.id;

        categoriesContainer.appendChild(button);
    }
    const title = document.querySelector("#portfolio h2");
    title.after(categoriesContainer);
    const buttons =categoriesContainer.querySelectorAll('.categorieButton');
    
    //Event click
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', ()=>{
            buttons.forEach(btn => btn.classList.remove('active'));
            buttons[i].classList.add('active');
            filterWorks(buttons[i].dataset.categorieId)
        });
    }
}

// Filtre des travaux
async function filterWorks(categoryId) {
    const works = await fetchWorks();
    let filteredWorks;

    if (categoryId === 'Tous') {
        filteredWorks = works;
    } else {
        filteredWorks = works.filter(function(work) {
            if( categoryId == work.categoryId){
                return true;
            }else{
                return false;
            }
        });
    }
    //Appelle affichage selon filtre
    displayWorks('gallery',filteredWorks);
}