!function(){window.addEventListener("scroll",(function(){var e=document.querySelector("header");window.scrollY>1?e.classList.add("sticky"):e.classList.remove("sticky")}));var e;new Swiper(".swiper",{direction:"horizontal",breakpoints:{320:{slidesPerView:1.2,spaceBetween:20,effect:"fade",fadeEffect:{crossFade:!0}},414:{slidesPerView:1.2,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:40},1280:{slidesPerView:2,spaceBetween:40}},allowTouchMove:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".hero-slider",{loop:!0,speed:1e3,allowTouchMove:!1,autoplay:{delay:5e3},navigation:{nextEl:".hero-slider__button-next",prevEl:".hero-slider__button-prev"}}),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay.active").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}))}();
//# sourceMappingURL=restaurant.89330dd9.js.map
