const car = document.getElementById("car");

function startAnimation() {
  car.style.transform = "translateX(500px)";
}

function resetAnimation() {
  car.style.transform = "translateX(0)";
}
function flyAnimation() {
  car.style.transform = "translate(800px, -300px)";
}
