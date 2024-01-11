var prev_mode = "light"

function mode(mode_selected) {
    console.log("called")
    var conversion;
    if (mode_selected == "dark" || mode_selected == "cloudy") {
        conversion = "dark"
    } else if (mode_selected == "lit") {
        mode_selected = "light"
        conversion = "light"
    }

    var elements = document.querySelectorAll(`[class$= "${conversion}"]`)

    elements.forEach((element) => {
        element.classList.remove(mode_selected);
        element.classList.add(conversion);
    });

    // console.log("converting from: ", conversion, "to ", mode_selected)
    // console.log(document.getElementById("title-cont-light"))
}