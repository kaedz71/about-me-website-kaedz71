console.log("JS connected!")
let name = "Kaeden";

    let themeToggle = document.getElementById("themeToggle")

    if (themeToggle) {
        themeToggle.onclick = function () {

            document.body.classList.toggle("light-mode")

         if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }

        }
    }

    let savedTheme =localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode")
    }
