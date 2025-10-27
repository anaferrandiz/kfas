'use strict'

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq__item");

  items.forEach(item => {
    const question = item.querySelector(".faq__question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
      items.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
    });
  });
});
