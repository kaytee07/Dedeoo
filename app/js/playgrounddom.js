import { Product } from "./locations.js";

const Dom = (()=> {
    function category(elem){
        let mainPage = document.querySelector(".main_page");
        let markup = `
        <div class="modal rmmodal">
        <div class="img1">
        <i class="bi bi-x-square"></i>
        </div>
        <div class="describeModal">
            <h3 class="name"></h3>
            <p class="here"></p>
            <div class="getBtn">
            <button class="getDirection">Get Direction</button>
            </div>
        </div>
    </div>
        <div class="short_write">
        <h3>search ${elem}</h3>
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
                <div class="card_box box5">
                <div class="img">

                </div>
                <div class="description">
                    <div class="display">
                        <h4 class="cat">${elem.name}</h4>
                    </div>
                    <div class="button">
                        <button class="find">read more</button>
                    </div> 
                </div>
            </div>
                `
           }
       })
       console.log(markup)
       cards.innerHTML = markup
    }

    function openModal(){
        let modal = document.querySelector(".modal");
        modal.classList.remove("rmmodal")
    }

    function closeModal(){
        let modal = document.querySelector(".modal");
        modal.classList.add("rmmodal");
    }

   function fillMOdal(location){
    console.log(location)
    let description = document.querySelector(".here");
    let name = document.querySelector(".name")
    Product.forEach(prod => {
        console.log(prod.name)
        if(prod.name === location){
            name.innerHTML = prod.name
            description.innerHTML = prod.about
        }
    })
   }


    function listeners(){
        let find = document.querySelectorAll(".find");
        let clsBtn = document.querySelector("i.bi-x-square");
        find.forEach(btn => {
            btn.addEventListener("click", () => {
                openModal()
                fillMOdal(btn.parentElement.previousElementSibling.children[0].innerHTML);
            })
        })

        clsBtn.addEventListener("click", ()=> {
            clsBtn.addEventListener("click", ()=> {
                closeModal()
            })
        })
    }

    function init(){
        category("play ground and Parks")
        loadCatCards("play ground and Parks")
        listeners()
    }




    return{
        init
    }
})()

Dom.init();