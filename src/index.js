import router from './routes/index'
import './styles/styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
/**
 * Escuchando cambios en el estado del documento
 */
window.addEventListener('load', router)
window.addEventListener('hashchange', router);
