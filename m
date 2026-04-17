let lantings = 0;
let perClick = 1;

const lantingsEl = document.getElementById("lantings");
const perClickEl = document.getElementById("perClick");
const shopLantingsEl = document.getElementById("shopLantings");

function update() {
  lantingsEl.textContent = lantings;
  perClickEl.textContent = perClick;
  shopLantingsEl.textContent = lantings;
}

document.getElementById("clickCircle").addEventListener("click", () => {
  lantings += perClick;
  update();
});

document.querySelector("[data-upgrade='click']").addEventListener("click", () => {
  if (lantings >= 30) {
    lantings -= 30;
    perClick++;
    update();
  } else {
    alert("Niet genoeg Lantings!");
  }
});

document.querySelectorAll(".menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.dataset.panel;
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    document.getElementById("panel-" + panel).classList.add("active");
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    document.getElementById("clickCircle").click();
  }
});

update();
