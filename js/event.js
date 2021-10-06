function on(id) {
    document.getElementById(id).style.display = "block";
}

function off(id) {
    document.getElementById(id).style.display = "none";
}
var check = document.querySelectorAll('.check');
Array.from(check).forEach(item => {
    item.addEventListener("click", () => {
        var selected = document.getElementsByClassName("active-btn");
        selected[0].className = selected[0].className.replace(" active-btn", "");
        item.className += " active-btn";
    });
});
function show(segment) {
    var cult = document.querySelectorAll('#cult');
    var tech = document.querySelectorAll('#tech');
    var sports = document.querySelectorAll('#sports');
    if (segment === 'cult') {
        for (var i = 0; i < cult.length; i++)
            cult[i].style.display = 'inline-block';
        for (var i = 0; i < tech.length; i++)
            tech[i].style.display = 'none';
        for (var i = 0; i < sports.length; i++)
            sports[i].style.display = 'none';
    }
    else if (segment === 'tech') {
        for (var i = 0; i < cult.length; i++)
            cult[i].style.display = 'none';
        for (var i = 0; i < tech.length; i++)
            tech[i].style.display = 'inline-block';
        for (var i = 0; i < sports.length; i++)
            sports[i].style.display = 'none';
    }
    else {
        for (var i = 0; i < cult.length; i++)
            cult[i].style.display = 'none';
        for (var i = 0; i < tech.length; i++)
            tech[i].style.display = 'none';
        for (var i = 0; i < sports.length; i++)
            sports[i].style.display = 'inline-block';
    }
}