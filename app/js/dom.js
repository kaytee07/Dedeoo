import { Product } from "./locations.js";

const Dom = (()=> {
    function category(elem){
        let mainPage = document.querySelector(".main_page");
        let markup = `
        <div class="short_write">
        <h3>${elem}</h3>
       </div>      
       <div class="cards">
            
        </div>
        `
        mainPage.innerHTML = markup
    }

    function loadCatCards(key){
       let cards = document.querySelector(".cards")
       let markup = "";
       Product.forEach(elem => {
           if(elem.Category === key){
                markup+= `
                <div class="card_box box1">
                <h4 class="cat">${elem.name}</h4>
                </div>
                `
           }
       })
       cards.innerHTML = markup
    }

    function listeners(){
        let categories = document.querySelectorAll(".cat")
        categories.forEach(elem => {
            elem.addEventListener("click", (e)=> {
                category(elem.innerHTML)
                loadCatCards(elem.innerHTML)
            })
        })
        
    }

    function init(){
        listeners()
    }


    return{
        init
    }
})()

export default Dom;