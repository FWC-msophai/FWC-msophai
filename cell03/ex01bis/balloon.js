$(document).ready(function () {
    const colors = ["red", "green", "blue"];
    let size = 200;
    let colorIndex = 0;

    $("#balloon").click(function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > 420) {
            size = 200;
        }

        $(this).css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[colorIndex]
        });
    });

    $("#balloon").mouseleave(function () {
        if (size > 200) {
            size -= 5;
        }

        colorIndex = (colorIndex + colors.length - 1) % colors.length;

        $(this).css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[colorIndex]
        });
    });
});
