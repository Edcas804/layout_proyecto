const Footer = () => {
    return `
        <footer class="w-full flex flex-col justify-end items-center">
            <p class="text-sm text-slate-500"><i>All rights reserved</i></p>
            <date class="text-sm text-slate-500">${new Date().getFullYear()}</date>
        </footer>
    `
}

export default Footer