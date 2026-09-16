const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let size = 200;
let colorIndex = 0;

balloon.addEventListener("click", function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    if (size > 420) {
        size = 200;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener("mouseleave", function () {
    if (size > 200) {
        size -= 5;
    }

    colorIndex = (colorIndex + colors.length - 1) % colors.length;

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});
