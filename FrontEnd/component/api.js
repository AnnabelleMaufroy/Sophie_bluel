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
        return await response.json()
    }catch (error){
        console.error("Erreur récupération Catégories:", error);
    }
}