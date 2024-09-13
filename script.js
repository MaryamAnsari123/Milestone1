var t_button = document.getElementById("t-skills");
var skills = document.getElementById("skills");
t_button.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
