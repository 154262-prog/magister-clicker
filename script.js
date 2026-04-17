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
// ----------------------
// SIMPLE BLACKJACK
// ----------------------

let bjMoney = 100; 
let bjDeck = [];
let bjPlayerCards = [];
let bjDealerCards = [];

const bjMoneyEl = document.getElementById("bjMoney");
const bjBetEl = document.getElementById("bjBet");
const bjDealerEl = document.getElementById("bjDealer");
const bjPlayerEl = document.getElementById("bjPlayer");
const bjResultEl = document.getElementById("bjResult");

function updateBJ() {
  bjMoneyEl.textContent = bjMoney;
}

function createDeck() {
  const deck = [];
  const values = [2,3,4,5,6,7,8,9,10,10,10,10,11]; 
  for (let i = 0; i < 4; i++) {
    for (let v of values) deck.push(v);
  }
  return deck.sort(() => Math.random() - 0.5);
}

function sum(cards) {
  let total = cards.reduce((a,b) => a+b, 0);
  while (total > 21 && cards.includes(11)) {
    cards[cards.indexOf(11)] = 1;
    total = cards.reduce((a,b) => a+b, 0);
  }
  return total;
}

document.getElementById("bjStart").addEventListener("click", () => {
  const bet = Number(bjBetEl.value);
  if (bet > bjMoney) {
    bjResultEl.textContent = "Niet genoeg geld!";
    return;
  }

  bjMoney -= bet;
  updateBJ();

  bjDeck = createDeck();
  bjPlayerCards = [bjDeck.pop(), bjDeck.pop()];
  bjDealerCards = [bjDeck.pop(), bjDeck.pop()];

  bjPlayerEl.textContent = bjPlayerCards.join(" + ") + " = " + sum(bjPlayerCards);
  bjDealerEl.textContent = bjDealerCards[0] + " + ?";

  bjResultEl.textContent = "";
});

document.getElementById("bjHit").addEventListener("click", () => {
  bjPlayerCards.push(bjDeck.pop());
  bjPlayerEl.textContent = bjPlayerCards.join(" + ") + " = " + sum(bjPlayerCards);

  if (sum(bjPlayerCards) > 21) {
    bjResultEl.textContent = "BUST! Je verliest.";
  }
});

document.getElementById("bjStand").addEventListener("click", () => {
  bjDealerEl.textContent = bjDealerCards.join(" + ") + " = " + sum(bjDealerCards);

  while (sum(bjDealerCards) < 17) {
    bjDealerCards.push(bjDeck.pop());
    bjDealerEl.textContent = bjDealerCards.join(" + ") + " = " + sum(bjDealerCards);
  }

  const player = sum(bjPlayerCards);
  const dealer = sum(bjDealerCards);
  const bet = Number(bjBetEl.value);

  if (player > 21) {
    bjResultEl.textContent = "Je bent al bust.";
  } else if (dealer > 21 || player > dealer) {
    bjMoney += bet * 2;
    bjResultEl.textContent = "Je wint!";
  } else if (player === dealer) {
    bjMoney += bet;
    bjResultEl.textContent = "Gelijkspel.";
  } else {
    bjResultEl.textContent = "Dealer wint.";
  }

  updateBJ();
});

updateBJ();
