function createElements(data, container) {
  const mainDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = data.url;
  const headerTwo = document.createElement("h2");
  const headText = document.createTextNode(data.title);
  headerTwo.appendChild(headText);

  mainDiv.classList.add("mainDiv");
  image.classList.add("img");
  headerTwo.classList.add("headTwo");

  mainDiv.appendChild(image);
  mainDiv.appendChild(headerTwo);
  container.appendChild(mainDiv);
}

export { createElements };
