const Header = () => {
    return `
        <header class="w-full rounded-full p-2 mb-2 dark-color-2">
            <nav class="flex justify-between">
                <ul class="flex justify-end">
                    <li class="showHideSideBar flex sm:hidden">
                        <button class="px-3 text-lg dark-color hover:text-violet-400 duration-500" href="#"><i class="bi bi-list"></i></button>
                    </li>
                </ul>
                <ul class="flex justify-end">
                    <li class="changeTheme">
                        <button class="px-3 text-lg dark-color-2 hover:text-violet-400 duration-500" href="#"><i class="bi bi-moon-stars-fill"></i></button>
                    </li>
                    <li>
                        <a class="px-3 text-lg dark-color-2 hover:text-violet-400 duration-500" href="#"><i class="bi bi-box-arrow-right"></i></a>
                    </li>
                </ul> 
            </nav>
        </header>
    `
}

export default Header