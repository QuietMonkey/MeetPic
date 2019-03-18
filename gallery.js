const modal = document.getElementById('modal')
// const PicOne = document.querySelector("#Categorie1>.Pic1");
const content = document.getElementById('modal-content')
const span = document.getElementsByClassName("close")[0]

function picSelect(picName){
    return "url('" + picName + ".jpg')"
}

function modalOpen(name){
    modal.style.display = "block";
    content.style.backgroundImage = picSelect(name)
}

function modalClose(){
    modal.style.display = "none"
    console.log('toto')
}

// PicOne.addEventListener("click", modalOpen)
span.onclick = modalClose;

