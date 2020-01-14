document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("body").classList.add("loaded");

  document.querySelector(".nav__trigger").addEventListener("click", function() {
    document.querySelector("body").classList.toggle("menuopened");
  });

  document
    .querySelector(".toggler__before")
    .addEventListener("click", function() {
      document.querySelector(".example__progress").classList.remove("after");
    });

  document
    .querySelector(".toggler__after")
    .addEventListener("click", function() {
      document.querySelector(".example__progress").classList.add("after");
    });
});
