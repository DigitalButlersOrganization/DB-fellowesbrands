import"./modulepreload-polyfill.js";/* empty css    */import{D as r,T as c}from"./bootstrap.esm.js";const n=document.getElementById("news-tabs"),a=n.querySelectorAll(".nav-link"),d=document.querySelector('.dropdown-menu[data-name="news"]'),e=document.querySelector('.dropdown-toggle[data-bs-toggle="dropdown"]'),i=()=>{new r(e),d.addEventListener("click",function(t){const o=t.target.dataset.value;e.textContent=t.target.textContent,document.querySelector(".dropdown-item.active").classList.remove("active"),t.target.classList.add("active"),Array.from(a).find(s=>s.href.includes(o)).click()})};i();const l=()=>{new c(n)};l();
