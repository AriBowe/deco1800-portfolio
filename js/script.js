// Toggles the nav case study section
function toggleOpen() {
    document.getElementById("case_study_links").classList.toggle("closed");
    document.getElementById("open_arrow").classList.toggle("right")
    document.getElementById("open_arrow").classList.toggle("down")
}

// Toggles making an image larger
function largeImage() {
    $(event.target)[0].classList.toggle("fullsize")
    for (item of $(event.target).parent().siblings().children()) {
        item.classList.remove("fullsize");
    }
};

// Fills progress bars from HTML
$(document).ready(function(){
    var ratings = document.querySelectorAll(".rating_item > p:first-of-type");
    var ratingBar = document.querySelectorAll(".rating_item > div:first-of-type > div:first-of-type");
    var numberOfRatings = ratings.length

    for (var i = 0; i < numberOfRatings; i++) {
        var rating = Number(ratings[i].innerHTML.split("/")[0])/5*100 // Converts from x/5 system to a percentage
        ratingBar[i].style.width = rating + "%"
    }
});