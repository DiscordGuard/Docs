import html from './src.pug'

function component() {
  console.log(html);
  const element = document.createElement("div");
  element.innerHTML = html();
  return element;
}

document.body.appendChild(component());
