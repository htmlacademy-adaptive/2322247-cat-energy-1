document.documentElement.classList.remove("no-js"),document.documentElement.classList.add("js");let navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");function initializeMenu(){navMain.classList.contains("main-nav--closed")||navMain.classList.add("main-nav--closed"),navMain.classList.contains("main-nav--opened")&&navMain.classList.remove("main-nav--opened")}function toggleMenu(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))}navToggle.addEventListener("click",(function(){toggleMenu()})),document.addEventListener("DOMContentLoaded",(function(){initializeMenu()}));