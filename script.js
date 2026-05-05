let index = 1;
const maxImages = 10; // change this to how many images you have
const imgElement = document.getElementById("image");

function formatNumber(num) {
  return num.toString().padStart(2, '0');
}

function nextImage() {
  imgElement.classList.add("fade-out");

  setTimeout(() => {
    index++;
    if (index > maxImages) index = 1;

    const filename = formatNumber(index) + ".jpg";
    imgElement.src = filename;

    imgElement.classList.remove("fade-out");
  }, 200);
}