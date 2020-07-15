const toggle = document.querySelector('.toggle');
$(document).ready(() => {
  $(".toggle").click(() => {
    $(".toggle").toggleClass("active");
    $(".overlay").toggleClass("active");
    $(".menu").toggleClass("active");
  });
});