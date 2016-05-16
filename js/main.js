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
