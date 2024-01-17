let navBar = document.getElementById("nav-bar")

const displayNavBar = () => {
    if (navBar.style.visibility === "visible") {
        navBar.style = "visibility: hidden; height: 0;"
        return
    }

    navBar.style = "visibility: visible; height: fit-content;"

}

const hideNavBar = () => {
    navBar.style = "visibility: hidden; height: 0;"
}