import { addModal, typeImage, optionalFormat, addFilesButton } from "./htmlElements";
import { addImagesNormal, addImagesRest } from "./add-images";

export function addModalToggleClass() {
  addModal.classList.toggle('addModalIn')
  addModal.classList.toggle('addModalOut')
}

function addFilesButtonAction (){
  if (typeImage.value == 'normal') {
    addImagesNormal()
  } else if (typeImage.value == 'rest') {
    addImagesRest()
  }
  addModalToggleClass()
}

function selectImageFormat(event){
  optionalFormat.forEach(element => element.classList.toggle('disable'))
}

// Event listeners
addFilesButton.addEventListener('click', addFilesButtonAction)

typeImage.addEventListener('change', event => selectImageFormat(event))