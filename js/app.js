var particleNumber = 900;
let windowWidth = $(window).width();

if (windowWidth < 800 & windowWidth > 400) {
    particleNumber = 600;
} else if (windowWidth <= 400) {
    particleNumber = 400;
}


let body = document.getElementById("body-element")

const addNavActive = () => {
    if (body.classList.contains("nav-active"))
        body.classList.remove("nav-active");
    else
        body.classList.add("nav-active");
}

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#nav"]', function (e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('html,body').animate({ scrollTop: pos });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("fav-logo").style.transform = "scale(1.2)";
    } else {
        document.getElementById("fav-logo").style.transform = "scale(1.0)";
    }
}
const changeFaqIcon = (id) => {
    //console.log(id);
    if (document.getElementById(`${id}-qna-icon`).innerHTML == "+")
        document.getElementById(`${id}-qna-icon`).innerHTML = "-";
    else
        document.getElementById(`${id}-qna-icon`).innerHTML = "+";
}
const app = new Vue({
    el: "#app",
    data() {
        return {
            persons: persons,
            selectedPersonIndex: null,
            isSelected: false,
            selectedPerson: null,
            // inlineStyles: null,
            isReady: false,
            isOk: false
        };
    }
});