console.clear();

let scrollY = 0;

$(window).scroll(function (event) {
  if (scrollY < this.scrollY) {
    scrollY = this.scrollY;
    console.log(scrollY);
    topBarFixed(scrollY, "down");
  } else {
    scrollY = this.scrollY;
    console.log(scrollY);
    topBarFixed(scrollY, "up");
  }
});

function topBarFixed(scrollY, upDown) {
  if (scrollY > 900 && upDown == "down") {
    $(`.top-bar`).removeClass(`active`);
  } else {
    $(`.top-bar`).addClass(`active`);
  }
  if (scrollY >= 200) {
    $(`.top-bar`).addClass(`bg-white`)
  } else if (scrollY == 0) {
    $(`.top-bar`).removeClass(`bg-white`)
  }
}

function tradePharmaceuticalBtn(A, N) {
  $(A).click(function () {
    $(`.section-2 > .con > div > h1.active`).removeClass(`active`);
    $(this).addClass(`active`);
    tradePharmaceuticalConShow(N)
  });
}

function tradePharmaceuticalConShow(N) {
  if (N === 1) {
    $(`.section-2 > .con > .pharmaceutical-con`).removeClass(`active`);
    $(`.section-2 > .con > .trade-con`).addClass(`active`);
  } else {
    $(`.section-2 > .con > .trade-con`).removeClass(`active`);
    $(`.section-2 > .con > .pharmaceutical-con`).addClass(`active`);
  }
}

tradePharmaceuticalBtn($(`.btn-trade`), 1);
tradePharmaceuticalBtn($(`.btn-pharmaceutical`), 0);
