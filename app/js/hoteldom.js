import { Product } from "./locations.js";

const Dom = (()=> {
    function category(elem){
        let mainPage = document.querySelector(".main_page");
        let markup = `
        <div class="pre"></div>
        <div class="modal rmmodal">
        <div class="img1">
        <i class="bi bi-x-octagon-fill"></i>
        <img class="wide_img" src="" alt="">
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
                <img src="${elem.img}" alt="">
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
        addCover();
        modal.classList.remove("rmmodal")
    }

    function closeModal(){
        let modal = document.querySelector(".modal");
        removeCover();
        modal.classList.add("rmmodal");
    }

    function addCover(){
        let pre = document.querySelector("div.pre");
        let body = document.querySelector("body");
        pre.classList.add("cover")
        body.classList.add("lock-scroll")
       }

       function removeCover(){
        let body = document.querySelector("body");
        let pre = document.querySelector("div.pre");
        pre.classList.remove("cover");
        body.classList.remove("lock-scroll")
       }

    function fillMOdal(location){
        console.log(location)
        let description = document.querySelector(".here");
        let img = document.querySelector("img.wide_img");
        let name = document.querySelector(".name")
        Product.forEach(prod => {
            console.log(prod.name)
            if(prod.name === location){
                name.innerHTML = prod.name
                description.innerHTML = prod.about;
                img.setAttribute("src", prod.img);
            }
        })
       }

    function listeners(){
        let find = document.querySelectorAll(".find");
        let clsBtn = document.querySelector("i.bi-x-octagon-fill");
        find.forEach(btn => {
            btn.addEventListener("click", () => {
                openModal()
                fillMOdal(btn.parentElement.previousElementSibling.children[0].innerHTML)
            })
        })

        clsBtn.addEventListener("click", ()=> {
            clsBtn.addEventListener("click", ()=> {
                closeModal()
            })
        })
    }

    function init(){
        category("hotels and resorts")
        loadCatCards("hotels and resorts")
        listeners()
    }




    return{
        init
    }
})()

Dom.init();

