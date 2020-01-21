document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("body").classList.add("loaded");

  var nav = document.querySelector(".nav__trigger");
  if (nav) {
    nav.addEventListener("click", function() {
      document.querySelector("body").classList.toggle("menuopened");
    });
  }

  var before = document.querySelector(".toggler__before");
  if (before) {
    before.addEventListener("click", function() {
      document.querySelector(".example__progress").classList.remove("after");
    });
  }

  var after = document.querySelector(".toggler__after");
  if (after) {
    after.addEventListener("click", function() {
      document.querySelector(".example__progress").classList.add("after");
    });
  }
});
