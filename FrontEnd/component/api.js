export async function fetchWorks(){
    try{
        const response = await fetch('http://localhost:5678/api/works');
        return await response.json();
    }catch (error){
        console.error("Erreur récupération Works:", error);
    }
}

export async function fetchCategories() {
    try{
        const response = await fetch('http://localhost:5678/api/categories')
        return await response.json();
    }catch (error){
        console.error("Erreur récupération Catégories:", error);
    }
}
export async function loginUser (formData){
    try{
        const response =  await fetch ('http://localhost:5678/api/users/login',{
            method : 'POST',
            body: formData
        });
        return await response.json();
    }catch (error){
        console.error('Erreur dans loginUser:', error);
    }
}