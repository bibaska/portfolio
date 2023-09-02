let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var typed = new Typed(".typed-text",{
  strings : ["a coder" ,"Puja Dhungana"],
  loop : true,
  typeSpeed : 150,
  backSpeed : 140,
  loop : true ,
  backDelay : 1500,
})
function email(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "dbibaska@gmail.com",
    Password : "721B15FB1BE90D5DF6777F2ADC8E4188F8AE",
    To : 'dbibaska@gmail.com',
    From : "dbibaska@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
