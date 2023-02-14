import { sizeModal, sheetContainer, sheet, meterButton, halfMeterButton, title, restD } from "./htmlElements"

export function sizeModalToggleClass() {
  sizeModal.classList.toggle('sizeModalIn')
  sizeModal.classList.toggle('sizeModalOut')
}

export function meterSizeSheet() {
  if (sheet.classList.contains('sheet-meter')){
    return;
  }
  sheetContainer.classList.remove('sheet-container--halfmeter')
  sheetContainer.classList.add('sheet-container--meter')
  
  sheet.classList.remove('sheet-halfmeter')
  sheet.classList.add('sheet-meter')
  
  restD.classList.remove('rest-d--half')
  restD.classList.add('rest-d--meter')
  
  title.innerHTML = 'Metro de Stickers'
}

export function halfMeterSizeSheet() {
  if (sheet.classList.contains('sheet-halfmeter')){
    return;
  }
  sheetContainer.classList.remove('sheet-container--meter')
  sheetContainer.classList.add('sheet-container--halfmeter')

  sheet.classList.remove('sheet-meter')
  sheet.classList.add('sheet-halfmeter')

  restD.classList.remove('rest-d--meter')
  restD.classList.add('rest-d--half')

  title.innerHTML = 'Medio Metro de Stickers'
}

meterButton.addEventListener('click', sizeModalToggleClass)
halfMeterButton.addEventListener('click', sizeModalToggleClass)

meterButton.addEventListener('click', meterSizeSheet)
halfMeterButton.addEventListener('click', halfMeterSizeSheet)