let ulDoc  = document.querySelector("#ulLi");
let inVal  = document.querySelector(".inputEl");
let headDoc= document.querySelector(".headDiv");

function lclfonc(){
    let lclitem = localStorage.getItem("item");

    if(inVal.value == ""){
        
        createfonc(lclitem);
    }else {
        
        localStorage.setItem("item", inVal.value);
        createfonc(inVal.value);
    }
    
}
lclfonc();

function addList(){
    if(!inVal.value){
        let createalert = document.createElement("div");
        createalert.className = "alertDiv";
        createalert.innerHTML = `<div class="alert alert-dismissible fade show fixed-top bg-danger text-white" role="alert">
            <strong>Hatalı Giriş!</strong> Lütfen yapılacaklar listenize bir öğe girin.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          `;
        ulDoc.appendChild(createalert);
        setTimeout(function(){
            createalert.remove();
        }, 4000);
    }else {
        
        lclfonc();
        inVal.value ="";
    }
};

function createfonc(val){

   let createLi = document.createElement("li");
   createLi.innerHTML = `${val}`;
   createLi.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
   ulDoc.append(createLi);

   let createbut = document.createElement("button");
   createbut.className = "close";
   createbut.type = "button";
   createbut.setAttribute('aria-hidden', 'Close');
   createLi.appendChild(createbut);

   let createspa = document.createElement("span");
   createspa.innerHTML = `&times;`;
   createspa.setAttribute('aria-hidden', 'true');
   createbut.appendChild(createspa);

   createbut.addEventListener("click", function(){
        this.parentElement.remove();
   });

   let createalert = document.createElement("div");
        createalert.className = "alertDiv";
        createalert.innerHTML = `<div class="alert alert-dismissible fade show fixed-top bg-success text-white" role="alert">
            <strong>Başarılı Giriş!</strong> Yapılacaklar listenize bir öğe eklendi.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          `;
        ulDoc.appendChild(createalert);
        setTimeout(function(){
            createalert.remove();
        }, 3000);
};

ulDoc.addEventListener("click", function(i){
    if(i.target.tagName = "LI"){
        i.target.classList.toggle("checked");
    }
});