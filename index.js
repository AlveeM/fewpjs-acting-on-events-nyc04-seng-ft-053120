let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNums = dodger.style.left.replace("px", "");
  let left = parseInt(leftNums, 10);
  if (left > (0)) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNums = dodger.style.left.replace("px", "");
  let left = parseInt(leftNums);
  if (left < (400 - dodger.offsetWidth)) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key == "ArrowRight") {
    moveDodgerRight();
  }
});