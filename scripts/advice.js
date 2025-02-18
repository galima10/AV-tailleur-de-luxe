const mostViewAdviceChoices = document.querySelectorAll(
  "#mostViewAdviceList li"
);
const infomostViewAdvice = document.getElementById("mostViewAdviceInfo");

const adviceNeedChoices = document.querySelectorAll("#adviceNeedList li");
const infoadviceNeed = document.getElementById("adviceNeedInfo");

const allAdvices = document.querySelectorAll('#allAdvices ul li article');

mostViewAdviceChoices.forEach((element) => {
  element.addEventListener("click", () => {
    disactive();
    element.classList.toggle("articleActive");
    if (element.id == "mostViewAdvice1") {
      infomostViewAdvice.classList.toggle("hidden");
    }
  });
});


adviceNeedChoices.forEach((element) => {
  element.addEventListener("click", () => {
    disactive();
    element.firstElementChild.classList.toggle("articleActive");
    if (element.id == "adviceNeed1") {
      infoadviceNeed.classList.toggle("hidden");
    }
  });
});

allAdvices.forEach((element) => {
  element.addEventListener("click", () => {
    disactive();
    element.classList.toggle("articleActive");
  });
});

function disactive(){
  infoadviceNeed.classList.add("hidden");
  infomostViewAdvice.classList.add("hidden");
  document.querySelectorAll(".articleActive").forEach((active) => {
    active.classList.remove("articleActive");
  });
}