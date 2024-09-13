
const t_button = document.getElementById("t-skills") as HTMLButtonElement
const skills = document.getElementById("skills") as HTMLElement

t_button.addEventListener("click" , () => {
    if(skills.style.display === "none") {
        skills.style.display = "block"
    }
    else {
        skills.style.display = "none"
    }
});

