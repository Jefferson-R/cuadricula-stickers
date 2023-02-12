import { addModal, files, typeImage, format, optionalFormat, addFilesButton } from "./htmlElements";

export function addModalToggleClass() {
  addModal.classList.toggle('addModalIn')
  addModal.classList.toggle('addModalOut')
}
export function selectFormat(event){
  const value = event.target.value

  optionalFormat.classList.toggle('disable')
}

// Event listeners
addFilesButton.addEventListener('click', addModalToggleClass)

typeImage.addEventListener('change', event => selectFormat(event))