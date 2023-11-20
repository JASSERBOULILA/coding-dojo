const body = document.querySelector('body')
const toggle = document.getElementById('toggle');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

function removebtn(id) {
    var element = document.querySelector(id);
    element.remove();
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})