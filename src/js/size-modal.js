import { sizeModal, sheet, meterButton, halfMeterButton, title, restD } from "./htmlElements"

export function sizeModalToggleClass() {
  sizeModal.classList.toggle('sizeModalIn')
  sizeModal.classList.toggle('sizeModalOut')
}

export function meterSizeSheet() {
  if (sheet.classList.contains('sheet-meter')){
    return;
  }
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