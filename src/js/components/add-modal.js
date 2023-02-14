import { addModal, files, typeImage, format, optionalFormat, repeat, addFilesButton } from "./htmlElements";
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
    for (let i = 0; i < repeat.value; i++) {
      addImagesNormal()
    }
  } else if (typeImage.value == 'rest') {
    for (let i = 0; i < repeat.value; i++) {
      addImagesRest()
    }
  }
  addModalToggleClass()
  files.value = ''
  repeat.value = 1
}

function selectImageFormat(){
  optionalFormat.forEach(element => element.classList.toggle('disable'))
  format.value = ''
}

// Event listeners
addFilesButton.addEventListener('click', addFilesButtonAction)

typeImage.addEventListener('change', selectImageFormat)