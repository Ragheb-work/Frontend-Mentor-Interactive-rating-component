let spans = document.querySelectorAll(".rate span");
let rate = 0;

spans.forEach(function (span) {
  span.addEventListener("click", function () {
    rate = rate + 1;
    span.style.background = "#7c8798";
  });
});

let btn = document.querySelector("button");

let backface = document.querySelector(".face.back");

let rateElement = document.querySelector(".box h5");

btn.onclick = function () {
  rateElement.innerHTML = `You Selected ${rate} Out Of ${spans.length}`;
  backface.style.transform = "perspective(500px) rotateY(360deg)";
};
