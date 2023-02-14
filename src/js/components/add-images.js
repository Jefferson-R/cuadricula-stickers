import { files, format, sheet, restD, restA } from "./htmlElements";

export function addImagesNormal (){ // IMAGES NORMAL
  const images = files.files;
  const classIndex = format.value - 1
  const classArray = ['sheet-image1', 'sheet-image2', 'sheet-image3', 'sheet-image4']
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img')
    img.classList.add(classArray[classIndex])
    img.src = URL.createObjectURL(images[i])
    sheet.appendChild(img);
  }
}

export function addImagesRest (){ // IMAGES REST
  const images = files.files;
  const formatValue = format.value

  if (formatValue == 1 || formatValue == 3){
    for (let i = 0; i < images.length; i++) {
      const img = document.createElement('img')

      if (formatValue == 1){
        img.classList.add('sheet-image1-d')
      } else {
        img.classList.add('sheet-image3-d')
      }

      img.src = URL.createObjectURL(images[i])
      restD.appendChild(img);
    }
  }
  if (formatValue == 1.1 || formatValue == 2){
    
    for (let i = 0; i < images.length; i++) {
      const img = document.createElement('img')

      if (formatValue == 1.1){
        img.classList.add('sheet-image1-a')
      } else {
        img.classList.add('sheet-image2-a')
      }

      img.src = URL.createObjectURL(images[i])
      restA.appendChild(img);
    }
  }
}