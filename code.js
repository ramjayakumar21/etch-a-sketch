let isMouseDown = false;
document.onmousedown = () => (isMouseDown = true)
document.onmouseup = () => (isMouseDown = false)