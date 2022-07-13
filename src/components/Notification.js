const mainContainerSection = document.querySelector(".main-container__section");
export function creatingPopup(popupInfo) {
  //removing used popup in dom before adding new when user click
  if (mainContainerSection.nextElementSibling) {
    mainContainerSection.nextElementSibling.remove();
  }
  const template = `
      <div class="popup-overlay">
      <div class="popup-container">
      <div role="contentinfo" class="popup-container__content">
      ${popupInfo.content}
      </div >
      ${
        popupInfo?.subContent
          ? `<div class="popup-container__sub-content">${popupInfo.subContent}</div>`
          : "<br>"
      }
      <div
      class="popup-container__btn-group"
      >
      <button class='popup-container__btn-primary'>
      ${popupInfo.primaryTitle}
      </button>
      ${
        popupInfo?.notification === "cookie"
          ? `<button class='popup-container__btn-secondary'>${popupInfo.secondaryTitle}</button>`
          : "<br>"
      }
      </div>
      </div>
      </div>
      `;
  mainContainerSection.insertAdjacentHTML("afterend", template);
}
