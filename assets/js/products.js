import"./core.js";const c=()=>{const e=document.querySelector("#products-work__video"),t=document.querySelector(".products-work__video-button");e.addEventListener("click",()=>{e.paused?e.play():e.pause(),t.classList.toggle("js--paused")})};c();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".products-process__accordion-item").forEach(t=>t.addEventListener("click",s=>{document.querySelector(".products-process__accordion-item.js--active").classList.remove("js--active"),t.classList.add("js--active")}))});const o=function(){if(document.width()>480){const t=document.querySelector(".js--active").width();document.querySelector(".products-process__accordion-item-content").css({width:`${t}px`})}};document.addEventListener("resize",()=>{o(),clearTimeout(window.resizedFinished),window.resizedFinished=setTimeout(o,500)});
