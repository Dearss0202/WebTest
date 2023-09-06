let element = document.querySelector("#fruit");
let children = array.from(element.children);

children.forEach(child => child.style.backgroundColor = "lightgreen");