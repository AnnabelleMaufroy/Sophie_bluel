export async function fetchWorks() {
    try {
        const response = await fetch("http://localhost:5678/api/works");
        return await response.json();
    } catch (error) {
        console.error("Erreur récupération Works:", error);
    }
}

export async function fetchCategories() {
    try {
        const response = await fetch("http://localhost:5678/api/categories");
        return await response.json();
    } catch (error) {
        console.error("Erreur récupération Catégories:", error);
    }
}
export async function loginUser(formData) {
    try {
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Erreur de connexion");
        }
        return responseData;
    } catch (error) {
        console.error("Erreur dans loginUser:", error)
        throw error;
    }
}

export async function deleteWork(id){
    try{
        const response = await fetch(`http://localhost:5678/api/works/${id}`,{
            method: 'DELETE',
            headers:{"Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Erreur lors de la suppression de l'élément avec l'id ${id}`);
        }
        return { success: true };
    }catch (error){
        console.error(`Erreur dans deleteWork pour l'id ${id}:`, error);
        return { success: false, error: error.message };
    }
}

export async function addWork(formData){
    try {
        const formdata = new FormData();
        formdata.append('image', formData.imageUrl);
        formdata.append('title', formData.title);
        formdata.append('category', formData.categoryId);
        
        console.log("Données envoyées :", formData);
        const response = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            body: formdata,
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const responseData = await response.json();
        if (!response.ok) {
            console.error("Détails de l'erreur : ", responseData);
            throw new Error(responseData.message || "Erreur lors de l'ajout du travail.");
        }
        return responseData;
    } catch (error) {
        console.error("Erreur dans addWork:", error);
        throw error;
    }
}