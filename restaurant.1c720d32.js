!function(){window.addEventListener("scroll",(function(){var e=document.querySelector("header");window.scrollY>1?e.classList.add("sticky"):e.classList.remove("sticky")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open-book-table]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal-book-table]")};function o(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-book-room]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal-book-room]")};function o(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-room-price]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal-room-price]")};function o(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),$(".js-open-modal").click((function(){var e=$(this).attr("data-modal");$(".js-modal[data-modal=".concat(e,"]")).addClass("show"),$(".modal-overlay").addClass("show")})),$(".js-close-modal").click((function(){$(this).parent(".modal").removeClass("show"),$(".modal-overlay").removeClass("show")})),$(".modal-overlay").click((function(){$(this).removeClass("show"),$(".modal.show").removeClass("show")}));new Swiper(".swiper",{direction:"horizontal",loop:!0,breakpoints:{320:{slidesPerView:1.2,spaceBetween:20,effect:"fade",fadeEffect:{crossFade:!0}},414:{slidesPerView:1.2,spaceBetween:25},1024:{slidesPerView:2,spaceBetween:40},1280:{slidesPerView:2,spaceBetween:40}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{sensitivity:1}});new Swiper(".hero-slider",{loop:!0,speed:1e3,navigation:{nextEl:".hero-slider__button-next",prevEl:".hero-slider__button-prev"},mousewheel:{sensitivity:1}})}();
//# sourceMappingURL=restaurant.1c720d32.js.map
