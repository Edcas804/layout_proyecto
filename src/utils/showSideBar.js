const showSideBar = (sideBar) => {
    let showHideButtons = document.querySelectorAll('.showHideSideBar')
    if(showHideButtons.length){
        showHideButtons.forEach(button => {
            button.addEventListener('click', () => {
                sideBar.classList.toggle('hidden')
            })
        })
    }
}

export default showSideBar