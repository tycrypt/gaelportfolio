export function setupProjectPageEvents() {
    const projectOne = document.getElementById("projectOne");

    if (projectOne) {
        projectOne.addEventListener("click", () => {
            window.location = "https://tycrypt.github.io/pomodoroSeconds/";
        });
    }
}