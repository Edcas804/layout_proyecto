import Home from '../pages/home'
import Ventas from '../pages/ventas'
import Productos from '../pages/productos'
import Usuarios from '../pages/usuarios'
import Contactos from '../pages/contacto'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import SideBar from '../templates/sideBar'
import Header from '../templates/header'
import showSideBar from '../utils/showSideBar'
import theme from '../utils/theme'
const routes = {
    '/': Home,
    '/contact': Contactos,
    '/productos': Productos,
    '/ventas': Ventas,
    '/usuarios': Usuarios,
    'default': () => 'Not Found in app'
}

const router = async () => {

    const mainContainer = document.querySelector('#mainContainer')
    const mainApp = document.querySelector('#mainApp')
    const sideBar = document.querySelector('#sideBar')

    /**
     * Main layout
     */
    mainContainer.classList.add("grid", "lg:grid-cols-12", "md:grid-cols-8", "sm:grid-cols-6", "box-border")
    //mainApp.classList.add("flex", "lg:col-span-10", "md:col-span-5", "sm:col-span-4", "white-bg", "p-2", "box-border", "shadow-md", "shadow-slate-400", "rounded-2xl", "flex-col", "items-center", "sm:h-screen", "sm:overflow-x-hidden")
    mainApp.classList.add("grid","grid-rows-[50px,1fr]", "lg:col-span-9", "md:col-span-5", "sm:col-span-4", "white-bg", "p-2", "box-border", "shadow-md", "shadow-slate-400", "rounded-2xl", "flex-col", "items-center", "sm:h-screen", "sm:overflow-x-hidden")
    sideBar.classList.add("hidden", "w-11/12", "sm:flex", "lg:col-span-3", "md:col-span-3", "sm:col-span-2", "absolute", "lg:relative", "md:relative", "sm:relative", "white-bg", "h-screen", "mx-2", "rounded-2xl", "p-2", "box-border", "duration-500" )
    let hash = getHash()
    let route = await resolveRoutes(hash)
    console.log('route is: ', route)

    let render = routes[route] || routes['default']

    sideBar.innerHTML = await SideBar()
    mainApp.innerHTML = await Header();
    mainApp.innerHTML += await render();

    /**
     * Listeners and handlers
     */
    showSideBar(sideBar)
    theme()
}

export default router
