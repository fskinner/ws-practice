(function() {
  function showModal(){
    document.getElementById("modal").className = "modal-layer show-modal";
  }

  function hideModal(){
    document.getElementById("modal").className = "modal-layer";
  }

  var menuOptions = document.getElementsByClassName("modal-trigger");

  for(var i = 0; i < menuOptions.length; i++){
    menuOptions[i].addEventListener("click", showModal);
  }

  document.getElementById("modal-close").addEventListener("click", hideModal);
})();

(function() {
  function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelectorAll('.header-paralax p');
    scrollPos = window.scrollY;

    if (scrollPos <= 600) {
        for(var i = 0; i < headerText.length; i++) {
          headerText[i].style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
          headerText[i].style.opacity = 1 - (scrollPos/600);
        }
    }
  }

  window.addEventListener('scroll', scrollBanner);
})();
