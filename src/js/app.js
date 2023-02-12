import { sizeButton, addButton } from "./htmlElements";
import { sizeModalToggleClass } from "./size-modal";
import { addModalToggleClass } from "./add-modal";

sizeButton.addEventListener('click', sizeModalToggleClass)
addButton.addEventListener('click', addModalToggleClass)
