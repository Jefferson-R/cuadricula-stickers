import html2canvas from 'html2canvas'
import { sheet } from './htmlElements'

export default function download(){
  if (sheet.classList.contains('sheet-meter')){
    html2canvas(sheet, {
      windowHeight: 7382,
      windowWidth: 7382
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 1);
        const link = document.createElement("a");
        link.download = "metro-de-stickers";
        link.href = imgData;
        link.click();
    })
  } else if (sheet.classList.contains('sheet-halfmeter')){
    html2canvas(sheet, {
      windowHeight: 6345.5,
      windowWidth: 7382
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 1);
        const link = document.createElement("a");
        link.download = "medio-metro-de-stickers";
        link.href = imgData;
        link.click();
    })
  }
}