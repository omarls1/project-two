// start about
let tabs = document.querySelectorAll(".company .text .collapses .tabses h5");
let tabsArr = Array.from(tabs);
let tabsContent = document.querySelectorAll(".tabsContent div");
let tabsContentArr = Array.from(tabsContent);

tabsArr.forEach((badge) => {
  badge.onclick = (ele) => {
    tabsArr.forEach((badge) => {
      badge.classList.remove("active");
    });
    ele.currentTarget.classList.add("active");

    tabsContentArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    let contentId = document.querySelector(ele.currentTarget.dataset.target);
    contentId.classList.add("active");

    let ptext = document.querySelector(".tabsContent div.active p");
    ptext.textContent = `${ele.currentTarget.textContent} : this is a text about  we creating for test ${ele.currentTarget.textContent} because the ${ele.currentTarget.textContent} is a text for the ${tabactive.textContent}  `;
  };
});

let tabactive = document.querySelector(
  ".company .text .collapses .tabses h5.active"
);
let ptext = document.querySelector(".tabsContent div.active p");
ptext.textContent = `${tabactive.textContent} : this is a text about  we creating for test ${tabactive.textContent} because the ${tabactive.textContent} is a text for the ${tabactive.textContent}  `;
// end about

// start achievement
let box = document.querySelector(".achievement .container .row .box");
let boxH3 = document.querySelectorAll(".achievement .container .row .box h3");
let started = false;

function startCount(el) {
  let goal = el.dataset.cont;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
      el.textContent = `+${el.textContent}`;
    }
  }, 200 / goal);
}

window.onscroll = () => {
  if (window.scrollY >= box.offsetTop - 429) {
    if (!started) {
      boxH3.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// end achievement

// start work
let switchers = document.querySelectorAll(
  ".work .container .works .switcher .badge"
);
let imgsGallery = document.querySelectorAll(
  ".work .container .works .gallery img"
);

switchers.forEach((ele) => {
  ele.addEventListener("click", (ele) => {
    switchers.forEach((el) => {
      el.classList.remove("active");
    });
    ele.currentTarget.classList.add("active");
    imgsGallery.forEach((img) => {
      img.style.display = "none";
    });
    let imgshow = document.querySelectorAll(ele.currentTarget.dataset.cat);
    imgshow.forEach((img) => {
      img.style.display = "block";
    });
  });
});
// end work

// page 404
let links = document.querySelectorAll("a");
links.forEach((ele) => {
  ele.onclick = (event) => {
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.open("GET", ele.href);
    request.send();
    request.onreadystatechange = () => {
      if (request.status == 404) {
        window.location.href = "./404/404.html";
      } else {
        event.target();
      }
    };
  };
});

window.onload = () => {
  let request = new XMLHttpRequest();
  request.open("GET", window.location.href);
  request.send();
  request.onreadystatechange = () => {
    if (request.status == 404) {
      window.location.href = "./404/404.html";
    }
  };
};
// end 404

// start change colors
let colors = document.querySelector(".colors");
let mainColors = document.querySelectorAll(".colors .main-color span");
let secondColors = document.querySelectorAll(".colors .second-color span");
let allElements = document.querySelectorAll("*");
let showColors = document.querySelector(".colors > span");

showColors.onclick = () => {
  if (colors.style.left == "-272px") {
    colors.style.left = "0";
  } else {
    colors.style.left = "-272px";
  }
};

function rgbToHex(rgb) {
  let rgbValues = rgb.match(/\d+/g);
  let hexValues = rgbValues.map((value) => {
    let hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });
  return "#" + hexValues.join("");
}

function changeColors(elements, targetColors) {
  elements.forEach((ele) => {
    ele.addEventListener("click", () => {
      allElements.forEach((el) => {
        let backgroundColor = rgbToHex(getComputedStyle(el).backgroundColor);
        if (
          targetColors.includes(backgroundColor) ||
          el.style.borderColor === backgroundColor
        ) {
          el.style.backgroundColor = ele.dataset.color;
          el.style.borderColor = ele.dataset.color;
        }
      });

      targetColors = ele.dataset.color;
    });
  });
}

changeColors(mainColors, ["#ff3366"]);
changeColors(secondColors, ["#333366"]);

// end change colors
