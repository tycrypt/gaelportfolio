export function setupProjectPageEvents() {
    const projectOne = document.getElementById("projectOne");

    if (projectOne) {
        projectOne.addEventListener("click", () => {
            window.location = "pomoSecond/pom.html";
        });
    }
}