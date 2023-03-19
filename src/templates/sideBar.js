import ProfileCard from '../templates/profileCard.js'
import Footer from "./footer";
import Logo from "./logo";

const SideBar = () => {
    const user = {
        name: 'ed test',
        rol: 'admin sistema',
        email: 'email@email.com'
    }
    return `
        <div class="w-full relative grid grid-rows-6 rounded-2xl shadow-md shadow-slate-500" >
            <li class="showHideSideBar absolute flex sm:hidden">
                <a class="px-3 text-lg dark-color hover:text-violet-400 duration-500" href="#"><i class="bi bi-x-circle-fill"></i></a>
            </li>
            <div class="flex flex-col justify-end row-span-1">
                ${Logo()}
                ${
                    (user instanceof Object)
                        ? ProfileCard(user)
                        : ''
                }
            </div>
            <nav class="w-full overflow-hidden row-span-5 py-2">
                <ul class="flex flex-col h-full p-3 overflow-auto m-2 border-t border-slate-500">
                    <li class="p-2 w-5/6 duration-300 hover:bg-violet-400 hover:text-violet-900 rounded-full"><a href="#/"> <i class="bi bi-house-door-fill mr-1"></i>Inicio</a></li>
                    <li class="p-2 w-5/6 duration-300 hover:bg-violet-400 hover:text-violet-900 rounded-full"><a href="#/productos"> <i class="bi bi-bag-check mr-1"></i>Productos</a></li>
                    <li class="p-2 w-5/6 duration-300 hover:bg-violet-400 hover:text-violet-900 rounded-full"><a href="#/ventas"> <i class="bi bi-cash-coin mr-1"></i>Ventas</a></li>
                    <li class="p-2 w-5/6 duration-300 hover:bg-violet-400 hover:text-violet-900 rounded-full"><a href="#/usuarios"> <i class="bi bi-people mr-1"></i>Usuarios</a></li>
                    <li class="p-2 w-5/6 duration-300 hover:bg-violet-400 hover:text-violet-900 rounded-full"><a href="#/contact"> <i class="bi bi-telephone mr-1"></i>Contacto</a></li>
                </ul>
            </nav>
        <div>
    `
}

export default SideBar

