$(document).ready(function () {
    $("#color-button").click(function () {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        $("body").css(
            "background-color",
            "rgb(" + red + ", " + green + ", " + blue + ")"
        );
    });
});
