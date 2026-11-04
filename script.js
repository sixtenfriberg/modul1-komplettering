// Hämta dropdown-menyn
const stylePicker = document.getElementById("style-picker");

// Färgerna som dropdown-menyn kan välja mellan
const colors = {
    standard: "#faf1f2",
    blue: "#6fa8e8",
    red: "#ec7b7b",
    green: "#7fd17a"
};

// Byter bakgrundsfärg
function changeColorNow() {
    document.body.style.backgroundColor = colors[stylePicker.value];
}

stylePicker.addEventListener("change", changeColorNow);

// Hämta menyknappen och listan som ligger direkt efter den
const menuBtn = document.getElementById("menu-btn");
const menu = menuBtn.nextElementSibling; // <ul>

// Visa eller dölj mobilmenyn när man klickar på Meny
menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
});

// Stäng mobilmenyn när fönstret blir bredare än mobilläget
window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
        menu.classList.remove("open");
    }
});