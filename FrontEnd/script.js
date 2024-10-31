import { fetchWorks } from "./component/api.js";
import { displayWorks } from "./component/works.js";
import { buttonCategories } from "./component/categories.js";

async function init(){
    const works = await fetchWorks();
    displayWorks('gallery', works);
    buttonCategories();
}
init();
