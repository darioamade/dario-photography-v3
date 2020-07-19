const toggle = document.querySelector('.toggle');
$(document).ready(() => {
  $(".toggle").click(() => {
    $(".toggle").toggleClass("active");
    $(".overlay").toggleClass("active");
    $(".menu").toggleClass("active");
  });
});





const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener("click", sendMsg)

  function sendMsg(){
    let content = messageIn.value
    //console.log(content);
    if(content === ''){
      alert('Please enter Valid value')
    }
    else {
      messageOut.innerHTML = `Subscribed!`;
      messageIn.value = '';
    }
   
  }