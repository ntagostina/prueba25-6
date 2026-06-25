// Gráfico //
const path = document.getElementById("performancePath");
const graph = document.querySelector(".graph-container");

const highlight = document.querySelector(".highlight");

const irating = document.getElementById("irating");
const lapTime = document.getElementById("lapTime");
const consistency = document.getElementById("consistency");

graph.addEventListener("mousemove", (e) => {

    const rect = graph.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const percentage = Math.max(0, Math.min(1, x / rect.width));

    const length = path.getTotalLength();

    const point = path.getPointAtLength(
        percentage * length
    );

    highlight.style.left = `${(point.x / 1000) * 100}%`;
    highlight.style.top = `${point.y * 1.40}px`;

    const ratingValue = Math.round(percentage * 125);

    const lapValue = (percentage * 1.8).toFixed(1);

    const consistencyValue = Math.round(percentage * 24);

    irating.textContent = `+${ratingValue}`;
    lapTime.textContent = `-${lapValue}s`;
    consistency.textContent = `+${consistencyValue}%`;
});

graph.addEventListener("mouseleave", () => {

    highlight.style.left = "55%";

    irating.textContent = "+125";
    lapTime.textContent = "-1.8s";
    consistency.textContent = "+24%";
});

// navbar //

const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// cuadrado verde //

const transitionSection = document.querySelector(".method-transition");

const word1 = document.querySelector(".word-1");
const word2 = document.querySelector(".word-2");
const word3 = document.querySelector(".word-3");

window.addEventListener("scroll", () => {

    const rect = transitionSection.getBoundingClientRect();

    const progress = Math.max(
        0,
        Math.min(
            1,
            -rect.top / (rect.height - window.innerHeight)
        )
    );

    word1.style.transform =
        `translateX(${progress * 300}px)`;

    word2.style.transform =
        `translateX(${-progress * 300}px)`;

    word3.style.transform =
        `translateX(${progress * 300}px)`;

});

// snake //

const snake = document.getElementById("snakePath");

let t = 0;
const y = 60;

function animateSnake() {

  t += 0.02;

  snake.setAttribute(
    "d",
    `M0,${y}
     C240,${120 + Math.sin(t) * 10}
     480,${0 + Math.sin(t + 1) * 10}
     720,${y}
     C960,${120 + Math.sin(t + 2) * 10}
     1200,${0 + Math.sin(t + 3) * 10}
     1440,${y}`
  );

  requestAnimationFrame(animateSnake);
}

if (snake) {
  animateSnake();
}

// nav mobile //

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

console.log(menuBtn);
console.log(nav);

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        console.log("click");

        nav.classList.toggle("active");
        menuBtn.classList.toggle("active");

        console.log(nav.className);
    });
}