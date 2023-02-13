import { sizeButton, addButton, downloadButton } from "./components/htmlElements";
import { sizeModalToggleClass } from "./components/size-modal";
import { addModalToggleClass } from "./components/add-modal";
import download from "./components/download-action";

sizeButton.addEventListener('click', sizeModalToggleClass)
addButton.addEventListener('click', addModalToggleClass)
downloadButton.addEventListener('click', download)
