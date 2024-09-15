let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".list");
let sliderItems = sliderList.querySelectorAll(".item");

let thumblin = document.querySelector(".thumblin");
let thumblinItems = thumblin.querySelectorAll(".item");

// Attach event listeners to the next and prev buttons
next.onclick = () => {
  moveSlider("next");
};

prev.onclick = function () {
  moveSlider("prev");
};

function moveSlider(direction) {
  let sliderItem;
  let thumblinItem;

  if (direction === "next") {
    // Move the first item to the end of the list
    sliderItem = sliderItems[0];
    sliderList.appendChild(sliderItem);

    // Move the first thumblin item to the end of the thumblin
    thumblinItem = thumblinItems[0];
    thumblin.appendChild(thumblinItem);
  } else if (direction === "prev") {
    // Move the last item to the beginning of the list
    sliderItem = sliderItems[sliderItems.length - 1];
    sliderList.insertBefore(sliderItem, sliderItems[0]);

    // Move the last thumblin item to the beginning of the thumblin
    thumblinItem = thumblinItems[thumblinItems.length - 1];
    thumblin.insertBefore(thumblinItem, thumblinItems[0]);
  }

  // Update the NodeList of items after DOM changes
  sliderItems = sliderList.querySelectorAll(".item");
  thumblinItems = thumblin.querySelectorAll(".item");
}
