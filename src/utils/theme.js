const changeTheme = (e = false) => {
    let currentTheme = localStorage.getItem("theme")
    if (!currentTheme) {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    }
    if (e.target) {
        currentTheme = currentTheme === "light"
            ? "dark"
            : "light"
    }
    document.documentElement.setAttribute("data-theme", currentTheme)
    localStorage.setItem("theme", currentTheme)
}

const theme = () => {
    let changeThemeButtons = document.querySelectorAll('.changeTheme')
    if(changeThemeButtons.length){
        changeThemeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                changeTheme(e)
            })
        })
    }
    changeTheme()
}
export default theme
