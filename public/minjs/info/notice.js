var message=document.getElementById("message"),notice=document.getElementById("notice"),needs=document.getElementById("needs"),back=document.getElementsByClassName(".header::before");notice.addEventListener("touchend",function(){location.href="notice.html"}),needs.addEventListener("touchend",function(){location.href="needs.html"}),message.addEventListener("touchend",function(){location.href="message.html"});