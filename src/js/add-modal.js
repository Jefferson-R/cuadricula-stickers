import { addModal, files, format, addFilesButton } from "./htmlElements";

export function addModalToggleClass() {
  addModal.classList.toggle('addModalIn')
  addModal.classList.toggle('addModalOut')
}

addFilesButton.addEventListener('click', addModalToggleClass)