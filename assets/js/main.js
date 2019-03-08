window.onload = function () {
  const all = document.querySelector(".all");
  const commercial = document.querySelector(".commercial");
  const residential = document.querySelector(".residential");

  const gallery = document.querySelectorAll(".gallery");

  /* Show all projects */
  all.addEventListener("click", function () {
    gallery.forEach(function (el) {
      el.classList.remove("d-none", "scale-up-center");
      el.classList.add("fade-in-tr");
      /* ADD / Remove active class from buttons */
      all.classList.add("active");
      commercial.classList.remove("active");
      residential.classList.remove("active");
    });
  });

  /* Show commercial projects */
  commercial.addEventListener("click", function () {
    gallery.forEach(function (el) {
      el.classList.remove("fade-in-tr");
      if (el.classList.contains("residential")) {
        el.classList.add("d-none");
        el.classList.remove("scale-up-center");
        /* ADD / Remove active class from buttons */
        commercial.classList.add("active");
        residential.classList.remove("active");
        all.classList.remove("active");
      }
      if (el.classList.contains("commercial")) {
        el.classList.remove("d-none");
        el.classList.add("scale-up-center");
      }
    });
  });
  
  /* Show residential projects */
  residential.addEventListener("click", function () {
    gallery.forEach(function (el) {
      el.classList.remove("fade-in-tr");
      if (el.classList.contains("commercial")) {
        el.classList.add("d-none");
        el.classList.remove("scale-up-center");
        /* ADD / Remove active class from buttons */
        residential.classList.add("active");
        commercial.classList.remove("active");
        all.classList.remove("active");
      }
      if (el.classList.contains("residential")) {
        el.classList.remove("d-none");
        el.classList.add("scale-up-center");
      }
    });
  });/* End residential block */

  /* ********************** */
  /* INSERT IMAGES IN MODAL */
  /* ********************** */
  // parentElement.parentElement.children[0].getAttribute('src')
  var insert_image = document.querySelector(".insert_image");
    
  document.body.addEventListener("click", function(evt){
    evt = evt || window.event;
    if (evt.target.classList[0] === "card-info"){
      var target = evt.target || evt.srcElement
    } 
    //target.parentElement.parentElement.children[0].getAttribute('src');
    console.log(target);
    insert_image.src = target.parentElement.parentElement.children[0].getAttribute('src');

  }, false);

}