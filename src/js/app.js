import { sizeButton, addButton, downloadButton, reloadButton } from "./components/htmlElements";
import { sizeModalToggleClass } from "./components/size-modal";
import { addModalToggleClass } from "./components/add-modal";
import download from "./components/download-action";
import reload from "./components/reload";

sizeButton.addEventListener('click', sizeModalToggleClass)
addButton.addEventListener('click', addModalToggleClass)
downloadButton.addEventListener('click', download)
reloadButton.addEventListener('click', reload)