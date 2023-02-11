import { sizeModal } from "./htmlElements"

export default function sizeModalToggleClass (){
  sizeModal.classList.toggle('sizeModalIn')
  sizeModal.classList.toggle('sizeModalOut')
}