const openMenuButton = document.querySelector(".open-menu");
const dropdownMenu = document.querySelector("#dropdown-menu");

dropdownMenu.classList.add("invisible");
openMenuButton.addEventListener("click", showDropdownMenu);
openMenuButton.addEventListener("mouseover", showDropdownMenu);
openMenuButton.addEventListener("mouseleave", hideDropdownMenu);

function showDropdownMenu() {
  if (dropdownMenu.classList.contains("invisible")) {
    dropdownMenu.classList.remove("invisible");
    dropdownMenu.classList.add("visible");
  } else {
    hideDropdownMenu();
  }
}

function hideDropdownMenu() {
  dropdownMenu.classList.remove("visible");
  dropdownMenu.classList.add("invisible");
}

const nextImgButton = document.querySelector("#next-image");
nextImgButton.addEventListener("click", nextImg);

const previousImgButton = document.querySelector("#previous-image");
previousImgButton.addEventListener("click", previousImg);

const imgPath = "images/image-*.jpg";
const imageCarousel = document.querySelector("#carousel-image");
let currentImg = 0;
imageCarousel.setAttribute("src", imgPath.replace("*", currentImg));

const dots = document.querySelectorAll(".dot");
dots[0].classList.add("active");

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    changeImage(index);
  });
});

function nextImg() {
  currentImg += 1;
  changeImage(currentImg);
}

function previousImg() {
  currentImg -= 1;
  changeImage(currentImg);
}

function changeImage(index) {
  currentImg = index;
  if (currentImg < 0) {
    currentImg = 2;
  } else if (currentImg > 2) {
    currentImg = 0;
  }
  imageCarousel.setAttribute("src", imgPath.replace("*", currentImg));
  updateDots();
}

function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    if (i === currentImg) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
}
