const progress = document.getElementById("progr");
const prev = document.getElementById("prev");
const netx = document.getElementById("netx");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

netx.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circles, indx) => {
    if (indx < currentActive) {
      circles.classList.add("active");
    } else {
      circles.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    netx.disabled = true;
  } else {
    prev.disabled = false;
    netx.disabled = false;
  }
}
