var headings = document.getElementsByClassName("lined-heading");

for (var i = 0; i < headings.length; i++) {
  var txt = headings[i].innerHTML.trim().split(" ");
  var newTxt = [];
  txt.forEach(function(el, o) {
    if (el.length) {
      newTxt.push("<span>" + el + "</span>");
    }
  });
  headings[i].innerHTML = newTxt.join(" ");
}
