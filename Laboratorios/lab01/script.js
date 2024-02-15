document.getElementById("form-1").addEventListener("submit", function (e) {
  e.preventDefault();
  let color = document.getElementById("colorInput").value;
  document.body.style.backgroundColor = color;
});
