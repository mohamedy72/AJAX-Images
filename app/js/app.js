import { createElements } from "./creatingElements.js";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", recieveData);

function recieveData() {
  const req = new XMLHttpRequest();
  req.open("GET", "../../photos.json", true);
  req.onreadystatechange = function () {
    let titleArr = [];
    let urlArr = [];
    if (this.readyState === 4 && this.status === 200) {
      container.innerHTML = "";
      const dataObject = JSON.parse(this.responseText);
      dataObject.forEach((obj) => {
        titleArr.push(obj.title);
        urlArr.push(obj.url);
        if (titleArr.length < 10) {
          createElements(obj, container);
        } else {
          return;
        }
      });
    } else {
    }
  };
  req.send();
}
