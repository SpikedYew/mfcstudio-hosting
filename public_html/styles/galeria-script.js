const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
const blokMove = document.querySelector(".contain-galeria");
let x = 0;
let isSmallScreen = window.matchMedia("(max-width: 768px)").matches; // Sprawdzamy początkowy stan ekranu

// Funkcja przesuwająca galerię
function moveGallery(step, limitMin, limitMax) {
  x += step;
  if (x > limitMax) x = limitMin; // Reset do początku galerii
  if (x < limitMin) x = limitMax; // Reset do końca galerii
  blokMove.style.transform = `translateX(${x}vw)`;
}

// Funkcja obsługująca rozmiary ekranu
function handleScreenSizeChange() {
  const isNowSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  // Odśwież stronę przy zmianie z większego na mniejszy ekran
  if (isNowSmallScreen !== isSmallScreen) {
    location.reload(); // Odświeżenie strony
  }

  isSmallScreen = isNowSmallScreen; // Zaktualizuj aktualny stan ekranu

  if (window.matchMedia("(min-width: 768px)").matches) {
    // Ekrany powyżej 768px
    x = 60;
    btnLeft.onclick = () => moveGallery(60, -900, 60);
    btnRight.onclick = () => moveGallery(-60, -900, 60);
  } else {
    x = 80;
    // Ekrany poniżej 768px
    btnLeft.onclick = () => moveGallery(80, -1200, 80);
    btnRight.onclick = () => moveGallery(-80, -1200, 80);
  }
}

// Wywołanie funkcji na start
handleScreenSizeChange();
window.addEventListener("resize", handleScreenSizeChange);

// const btnLeft = document.querySelector(".arrow-left");
// const btnRight = document.querySelector(".arrow-right");
// const blokMove = document.querySelector(".contain-galeria");
// const dotUnderGal = document.querySelectorAll("#one");

// let x = 0;

// function handleScreenSizeChange() {
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     // Code for screen sizes wider than 758px
//     btnLeft.addEventListener("click", () => {
//       x += 60;
//       x >= 120 ? (x = -900) : console.log(x);
//       blokMove.style.transform = `translateX( ${x}vw)`;
//     });
//     btnRight.addEventListener("click", () => {
//       x -= 60;
//       x <= -900 ? (x = 60) : console.log(x);
//       blokMove.style.transform = `translateX( ${x}vw)`;
//     });
//     // Your code for wider screens
//   } else {
//     // Code for screen sizes less than 758px

//     // Your code for smaller screens
//     btnLeft.addEventListener("click", () => {
//       x += 80;
//       x >= 160 ? (x = -1200) : console.log(x);
//       blokMove.style.transform = `translateX( ${x}vw)`;
//     });
//     btnRight.addEventListener("click", () => {
//       x -= 80;
//       x <= -1200 ? (x = 80) : console.log(x);
//       blokMove.style.transform = `translateX( ${x}vw)`;
//     });
//   }
// }

// handleScreenSizeChange();

// window.addEventListener("resize", handleScreenSizeChange);

// //gallery circles under
