export function displayModal(modalContentClass){
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = "block";

    const modalContent = document.createElement('div');
    modalContent.classList.add(modalContentClass);

    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';

    modalContent.appendChild(close);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    close.addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e)=>{
        if (e.target === modal) {
            modal.remove();
        }
    });
}