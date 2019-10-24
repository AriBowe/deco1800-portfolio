function toggleOpen() {
    document.getElementById("case_study_links").classList.toggle("closed");
    document.getElementById("open_arrow").classList.toggle("right")
    document.getElementById("open_arrow").classList.toggle("down")
}

function largeImage() {
    $(event.target)[0].classList.toggle("fullsize")
    for (item of $(event.target).parent().siblings().children()) {
        item.classList.remove("fullsize");
    }
};