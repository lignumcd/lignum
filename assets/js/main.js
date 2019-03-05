window.onload = function () {
  const all = document.querySelector(".all");
  const commercial = document.querySelector(".commercial");
  const residential = document.querySelector(".residential");

  const gallery = document.querySelectorAll(".gallery");

  all.addEventListener("click", function(){
    gallery.forEach(function(el){
      el.classList.remove("d-none");
      console.log(el);
    });
  });

  commercial.addEventListener("click", function(){
    gallery.forEach(function(el){
      if (el.classList.contains("residential")){
        el.classList.add("d-none");
      }
      if (el.classList.contains("commercial")){
        el.classList.remove("d-none");
      }
    });
  });

  residential.addEventListener("click", function(){
    gallery.forEach(function(el){
      if (el.classList.contains("commercial")){
        el.classList.add("d-none");
      }
      if (el.classList.contains("residential")){
        el.classList.remove("d-none");
      }
    });
  });

}