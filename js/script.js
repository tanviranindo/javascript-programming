window.addEventListener("load", method);

function method() {
    document.getElementById("pageLocation").innerHTML = "Location : " + window.location.href;
    const date1 = new Date(document.lastModified);
    document.getElementById("lastModified").innerHTML = "Modified : " + date1.toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        weekday: "long",
        year: "numeric"
    });
    const date2 = new Date();
    document.getElementById("time").innerHTML = "Time : " + date2.toLocaleDateString("en-us", {
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        month: "long",
        second: "2-digit",
        weekday: "long",
        year: "numeric"
    });
    setTimeout("method()", 1000);
}


window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach(function(navigationItem) {
    navigationItem.addEventListener("click", function() {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}