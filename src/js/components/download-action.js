import html2canvas from 'html2canvas'
import { sheet } from './htmlElements'

export default function download(){
  html2canvas(sheet).then(canvas => {
    console.log(canvas)
  })
}