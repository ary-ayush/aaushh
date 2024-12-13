const febHolidays = [
    "Dear Aastha🙃,",
    "First of all, love you (dostii wala 🙃✌)❤️",
    "You're my everything",
    "There is no one",
    "like uhh in my life...",
    "I will always be there for you",
    "No matter how far we are🥰",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive.",
    "In the word, you're just perfect.😍",
    "I'm the happiest person alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "You are the most special person in my life🥰",
    "I don't want to lose you",
    "And you are so awesome ywwr😊",
    "There's no one better than you❤️",
    "You're the best frnd😇!!",
    "or hn tum nh kajal lagaya kro🙂",
    "Qnki agr kisi ne nzr lga dia to 🙂",
    "smile plzz📸,",
    "ummmmm....😗",
    "or ky boluu ywrr🙂🙂",
    "hm yaad aya ,",
    "khana thoda jyda khaya kro 🙂",
    "taki mai tumhe moti motii keh sku🙂😗",
    "or hn kuchh glti hue hogi",
    "muzse ye sb likhne me 🙃",
    "to n use ignr krna 🙂, cuz uk mri angrezi kuch jyda weak h 🙂",
    "or ye last line",
    "thank uhh so muchh for talking 2 me😇"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  