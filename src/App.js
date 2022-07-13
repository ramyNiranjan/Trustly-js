import { cookieData, getStartedData } from "./data";
import { creatingPopup } from "./components/Notification";

export function init() {
  cookiehandler();
}

function cookiehandler() {
  creatingPopup(cookieData);
  const primaryBtn = document.querySelector(".popup-container__btn-primary");
  const secondaryBtn = document.querySelector(
    ".popup-container__btn-secondary"
  );
  const popupOverlay = document.querySelector(".popup-overlay");
  const localStorageValue = localStorage.getItem("visited");
  function handleCookieClose() {
    localStorage.setItem("visited", true);
    popupOverlay.style.display = "none";
  }
  primaryBtn.addEventListener("click", handleCookieClose);
  secondaryBtn.addEventListener("click", handleCookieClose);
  // checking local storage if user visited or not
  if (localStorageValue) {
    popupOverlay.style.display = "none";
  }
}

export function gettingStartedPopupHandler() {
  const articleBtn = document.querySelector(".article-main-container__btn");
  articleBtn.addEventListener("click", () => {
    creatingPopup(getStartedData(window.innerWidth));
    const primaryBtn = document.querySelector(".popup-container__btn-primary");
    const popupOverlay = document.querySelector(".popup-overlay");
    popupOverlay.style.display = "flex";
    primaryBtn.addEventListener("click", () => {
      popupOverlay.style.display = "none";
    });
  });

  window.onresize = (e) => {
    const subContent = document.querySelector(".popup-container__sub-content");
    subContent.textContent = `your current browser width ${e.target.innerWidth}`;
  };
}
