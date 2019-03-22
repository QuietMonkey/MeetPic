<<<<<<< HEAD

=======
>>>>>>> 8470c9aa37a4550e7eec087038bd9bfaced757f2
let modal = document.getElementById('myModal');

let btn = document.getElementById("myBtn");

let span = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = "block";
}
<<<<<<< HEAD


span.onclick = _ => modal.style.display = 'none';



=======
span.onclick = _ => modal.style.display = 'none';
>>>>>>> 8470c9aa37a4550e7eec087038bd9bfaced757f2
window.onclick = function(event) {
  if (event.target === span) {
    modal.style.display = "none";
  }
<<<<<<< HEAD
} 
=======
} 


>>>>>>> 8470c9aa37a4550e7eec087038bd9bfaced757f2
