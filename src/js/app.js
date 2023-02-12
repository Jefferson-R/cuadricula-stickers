import { sizeButton, addButton } from "./components/htmlElements";
import { sizeModalToggleClass } from "./components/size-modal";
import { addModalToggleClass } from "./components/add-modal";

sizeButton.addEventListener('click', sizeModalToggleClass)
addButton.addEventListener('click', addModalToggleClass)
