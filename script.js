const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const toggleSign = question.querySelector(".toggle-sign i");
    if (answer.style.height === "0px" || !answer.style.height) {
      answer.style.height = answer.scrollHeight + "px";
      toggleSign.classList.remove("fa-plus");
      toggleSign.classList.add("fa-minus");
      question.classList.add("open");
    } else {
      answer.style.height = "0px";
      toggleSign.classList.remove("fa-minus");
      toggleSign.classList.add("fa-plus");
      question.classList.remove("open");
    }
  });
});

// PROJECTS CAROUSEL
const projectsContainer = document.querySelector(".projects-container");
const projectItems = document.querySelectorAll(".projects-item");
const projectsPrevBtn = document.querySelector(".prev-button");
const projectsNextBtn = document.querySelector(".next-button");
const projectsTextItems = document.querySelectorAll(".projects-text-item");
let index = 1;
projectsPrevBtn.addEventListener("click", () => {
  if (index != 0) {
    index -= 1;
  } else {
    index = 2;
  }
  projectsTextItems.forEach((item) => {
    item.classList.remove("active");
  });
  projectsTextItems[index].classList.add("active");
  projectItems.forEach((item, i) => {
    let number = item.className[item.className.length - 1];
    number = parseInt(number) + 1;
    if (
      parseInt(
        projectItems[2].className[projectItems[2].className.length - 1]
      ) < 4
    ) {
      item.className = `projects-item projects-item-${number}`;
    } else {
      item.className = `projects-item projects-item-${i}`;
    }
  });
});

projectsNextBtn.addEventListener("click", () => {
  if (index != 2) {
    index += 1;
  } else {
    index = 0;
  }
  projectsTextItems.forEach((item) => {
    item.classList.remove("active");
  });
  projectsTextItems[index].classList.add("active");
  projectItems.forEach((item, i) => {
    let number = item.className[item.className.length - 1];
    number = parseInt(number) - 1;
    if (
      parseInt(
        projectItems[2].className[projectItems[2].className.length - 1]
      ) > 2
    ) {
      item.className = `projects-item projects-item-${number}`;
    } else {
      item.className = `projects-item projects-item-${i + 2}`;
    }
  });
});

// ABOUT SECTION
const aboutBtns = document.querySelectorAll(".about-button");
const aboutTexts = document.querySelectorAll(".about-text");
const aboutImgs = document.querySelectorAll(".about-img");

aboutBtns.forEach((button, i) => {
  button.addEventListener("click", () => {
    aboutBtns.forEach((button) => {
      button.classList.remove("active");
    });
    aboutTexts.forEach((text) => {
      text.classList.remove("active");
    });
    aboutImgs.forEach((img) => {
      img.classList.remove("active");
    });
    button.classList.add("active");
    aboutTexts[i].classList.add("active");
    aboutImgs[i].classList.add("active");
  });
});
