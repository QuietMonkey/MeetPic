
let modal = document.getElementById('myModal');

let btn = document.getElementById("myBtn");

let span = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = _ => modal.style.display = 'none';



window.onclick = function(event) {
  if (event.target === span) {
    modal.style.display = "none";
  }
} 