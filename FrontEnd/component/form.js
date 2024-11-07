export async function createForm(form,type,label){
    const newLabel = document.createElement('label');
    const newInput =  document.createElement('input');
    
    newLabel.setAttribute('for', type);
    newLabel.textContent = label;

    newInput.type = type;
    newInput.id = type;
    newInput.name = type;

    form.appendChild(newLabel);
    form.appendChild(newInput);
}