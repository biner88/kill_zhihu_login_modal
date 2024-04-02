const closeModalEl = document.querySelector(".Modal-closeButton");
const ModalWapper = document.querySelector(".Modal-wrapper");
if (ModalWapper) {
  ModalWapper.style.display = "none";
}
if (closeModalEl) {
  closeModalEl.click();
}