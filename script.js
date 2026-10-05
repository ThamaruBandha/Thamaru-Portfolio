// Find the theme button
const themeButton = document.getElementById("themeButton");

// When the button is clicked
themeButton.addEventListener("click", function () {

    // Add or remove the light-mode class
    document.body.classList.toggle("light-mode");

    // Change the button text
    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }

});