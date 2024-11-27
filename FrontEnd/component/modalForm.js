import { fetchCategories, addWork, fetchWorks } from "./api.js";
import { createForm } from "./form.js";
import { modalGalerie } from "./modalGalerie.js";
import { workPage } from "./projet.js";

export async function modalForm(){
    const divContainer =  document.createElement('div');
    divContainer.classList.add('divContainerForm');

    const arrowSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrowSVG.setAttribute("width", "21");
    arrowSVG.setAttribute("height", "21");
    arrowSVG.setAttribute("viewBox", "0 0 21 21");
    arrowSVG.setAttribute("fill", "none");
    arrowSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    arrowSVG.innerHTML = `
        <path d="M0.439478 8.94458C-0.146493 9.53055 -0.146493 10.4822 0.439478 11.0681L7.9399 18.5686C8.52587 19.1545 9.47748 19.1545 10.0635 18.5686C10.6494 17.9826 10.6494 17.031 10.0635 16.445L5.11786 11.5041H19.4999C20.3297 11.5041 21 10.8338 21 10.004C21 9.17428 20.3297 8.50393 19.4999 8.50393H5.12255L10.0588 3.56303C10.6447 2.97706 10.6447 2.02545 10.0588 1.43948C9.47279 0.853507 8.52118 0.853507 7.93521 1.43948L0.43479 8.9399L0.439478 8.94458Z" fill="black"/>
    `;
    arrowSVG.classList.add('arrowSVG');

    arrowSVG.addEventListener('click', async ()=>{
        const modalContainer = document.querySelector('.modalContent');
        if (modalContainer) {
            const updatedWorks = await fetchWorks();
            modalContainer.innerHTML = '';
            const galerie = modalGalerie(updatedWorks);
            modalContainer.appendChild(galerie);
        }
    })

    divContainer.appendChild(arrowSVG);

    const title = document.createElement('div');
    title.textContent = 'Ajout photo';
    title.classList.add('title');
    divContainer.appendChild(title);

    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');

    const form =document.createElement('form');
    form.classList.add('addPhoto');

    const fileContainer = document.createElement('div');
    fileContainer.classList.add('fileContainer');

    const logoSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    logoSVG.setAttribute("width", "76");
    logoSVG.setAttribute("height", "76");
    logoSVG.setAttribute("viewBox", "0 0 76 76");
    logoSVG.setAttribute("fill", "none");
    logoSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    logoSVG.innerHTML = `
        <path d="M63.5517 15.8879C64.7228 15.8879 65.681 16.8461 65.681 18.0172V60.5768L65.0156 59.7118L46.9165 36.2894C46.3176 35.5042 45.3727 35.0517 44.3879 35.0517C43.4031 35.0517 42.4715 35.5042 41.8594 36.2894L30.8136 50.5824L26.7546 44.8998C26.1557 44.0614 25.1975 43.569 24.1595 43.569C23.1214 43.569 22.1632 44.0614 21.5644 44.9131L10.9178 59.8183L10.319 60.6434V60.6034V18.0172C10.319 16.8461 11.2772 15.8879 12.4483 15.8879H63.5517ZM12.4483 9.5C7.75048 9.5 3.93103 13.3195 3.93103 18.0172V60.6034C3.93103 65.3012 7.75048 69.1207 12.4483 69.1207H63.5517C68.2495 69.1207 72.069 65.3012 72.069 60.6034V18.0172C72.069 13.3195 68.2495 9.5 63.5517 9.5H12.4483ZM23.0948 35.0517C23.9337 35.0517 24.7644 34.8865 25.5394 34.5655C26.3144 34.2444 27.0186 33.7739 27.6118 33.1807C28.2049 32.5876 28.6755 31.8834 28.9965 31.1083C29.3175 30.3333 29.4828 29.5027 29.4828 28.6638C29.4828 27.8249 29.3175 26.9943 28.9965 26.2192C28.6755 25.4442 28.2049 24.74 27.6118 24.1468C27.0186 23.5537 26.3144 23.0831 25.5394 22.7621C24.7644 22.4411 23.9337 22.2759 23.0948 22.2759C22.2559 22.2759 21.4253 22.4411 20.6503 22.7621C19.8752 23.0831 19.171 23.5537 18.5779 24.1468C17.9847 24.74 17.5142 25.4442 17.1931 26.2192C16.8721 26.9943 16.7069 27.8249 16.7069 28.6638C16.7069 29.5027 16.8721 30.3333 17.1931 31.1083C17.5142 31.8834 17.9847 32.5876 18.5779 33.1807C19.171 33.7739 19.8752 34.2444 20.6503 34.5655C21.4253 34.8865 22.2559 35.0517 23.0948 35.0517Z" fill="#B9C5CC"/>
    `;

    logoSVG.classList.add('logoImage');

    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.id = 'image';
    inputFile.name = 'image';
    inputFile.required = true;
    inputFile.classList.add('fileInput');

    const buttonFile = document.createElement('button');
    buttonFile.textContent = '+ Ajouter photo';
    buttonFile.classList.add('buttonFile');

    buttonFile.addEventListener('click', () => inputFile.click());
    
    const fileText = document.createElement('p');
    fileText.textContent ='jpg, png : 4mo max';
    fileText.classList.add('fileText');

    const fileError = document.createElement('p');
    fileError.textContent = 'Le fichier doit être une image au format jpg ou png.';
    fileError.classList.add('fileError');
    fileError.style.display = 'none';
    fileContainer.appendChild(fileError);

    let selectedFile = null;
    inputFile.addEventListener('change', () => {
        const file = inputFile.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png'];
            if (!validTypes.includes(file.type)) {
                fileError.style.display = 'block';
                inputFile.value = '';
                selectedFile = null;
            } else {
                fileError.style.display = 'none';
                selectedFile = file;
                const imageURL = URL.createObjectURL(file);
                const img = document.createElement('img');
                img.src = imageURL;
                img.classList.add('previewImage');

                fileContainer.appendChild(img);
                logoSVG.style.display = 'none';
                inputFile.style.display = 'none';
                buttonFile.style.display = 'none';
                fileText.style.display = 'none';
            }
        } else {
            fileError.style.display = 'none';
            selectedFile = null;
        }
    });
    
    fileContainer.appendChild(logoSVG);
    fileContainer.appendChild(inputFile);
    fileContainer.appendChild(buttonFile);
    fileContainer.appendChild(fileText);

    const labelCategories = document.createElement('label');
    labelCategories.textContent='Categorie';

    const categories = await fetchCategories();
    const categoriesContainer = document.createElement('div');
    categoriesContainer.classList.add('categoriesContainer');

    const categorieSelect = document.createElement('select');
    categorieSelect.id = 'category';
    categorieSelect.name = 'category';
    categorieSelect.required = true;
    categorieSelect.classList.add('categorieSelect');

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    categorieSelect.appendChild(defaultOption);

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categorieSelect.appendChild(option);
    });

    categoriesContainer.appendChild(categorieSelect);
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Valider';
    submitButton.classList.add('submitButton');

    const hr = document.createElement('hr');
 
    form.appendChild(fileContainer);
    await createForm(form, 'text', 'Titre');
    form.appendChild(labelCategories);
    form.appendChild(categoriesContainer);
    form.appendChild(hr);
    form.appendChild(submitButton);
 
    formContainer.appendChild(form);
    divContainer.appendChild(formContainer);

    form.addEventListener('input',()=>{
        let checkField = true;
        form.querySelectorAll('input[required], select[required]').forEach(field => {
            if (field.value.trim() === '') {
                checkField = false;
            }
        });
        if (checkField) {
            submitButton.style.backgroundColor = 'rgba(29, 97, 84, 1)';
        } else {
            submitButton.style.backgroundColor = 'rgba(167, 167, 167, 1)';
        }
    })
    
    form.addEventListener('submit', async (e)=>{
        e.preventDefault();

        const formData = {
            title : form.text.value,
            imageUrl: selectedFile,
            categoryId: form.category.value,
        };
        try {
            const newWork = await addWork(formData);
            console.log("Nouveau travail ajouté:", newWork);
            form.reset();

            logoSVG.style.display = 'block';
            inputFile.style.display = 'block';
            buttonFile.style.display = 'block';
            fileText.style.display = 'block';
            selectedFile = null;

            const img = document.querySelector('.previewImage');
            if(img){
                img.remove();
            }
            
        } catch (error) {
            console.error("Erreur lors de l'ajout du travail:", error);
        }
        workPage();
    });

    return divContainer;
}