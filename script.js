const lightBulb = document.getElementById("lightBulb");
const switchButton = document.getElementById("toogleButton");

let isLightOn = true;

if (isLightOn) {
  lightBulb.style.backgroundColor = "yellow";
  switchButton.textContent = "Turn Off";
}

switchButton.addEventListener("click", function () {
  if (isLightOn) {
    lightBulb.style.backgroundColor = "grey";
    switchButton.textContent = "Turn On";
  } else {
    lightBulb.style.backgroundColor = "yellow";
    switchButton.textContent = "Turn Off";
  }
  isLightOn = !isLightOn;
});
