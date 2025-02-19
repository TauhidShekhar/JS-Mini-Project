const btnElement = document.querySelector(".searchBtn");
const containerElement = document.querySelector(".serachContainer");

btnElement.addEventListener("click", () => {
    containerElement.classList.toggle("active");
});