let btn = document.querySelector(".card-btn");
let slide = document.querySelector(".card-slide");

btn.addEventListener("click", () => {
  slide.classList.toggle("show")

  let btnIcon = btn.querySelector("i");
  if (btnIcon.classList.contains("fa-plus")) {
    btnIcon.classList.replace("fa-plus","fa-minus")
  } else {
    btnIcon.classList.replace("fa-minus", "fa-plus");
  }
})
