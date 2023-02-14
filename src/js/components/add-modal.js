import { addModal, files, typeImage, format, optionalFormat, addFilesButton } from "./htmlElements";
import { addImagesNormal, addImagesRest } from "./add-images";

export function addModalToggleClass() {
  addModal.classList.toggle('addModalIn')
  addModal.classList.toggle('addModalOut')
}

function addFilesButtonAction (){
  if (format.value == '' || files.value == '') {
    alert('Por favor llene todos los campos')
    return
  }
  if (typeImage.value == 'normal') {
    addImagesNormal()
  } else if (typeImage.value == 'rest') {
    addImagesRest()
  }
  addModalToggleClass()
  files.value = ''
}

function selectImageFormat(){
  optionalFormat.forEach(element => element.classList.toggle('disable'))
  format.value = ''
}

// Event listeners
addFilesButton.addEventListener('click', addFilesButtonAction)

typeImage.addEventListener('change', selectImageFormat)