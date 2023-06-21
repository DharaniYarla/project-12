var poses = document.getElementsByClassName("pose");
for (var i = 0; i < poses.length; i++) {
  poses[i].addEventListener("click", toggleDetails);
}

function toggleDetails() {
  this.classList.toggle("active");
}
