const ProfileCard = ({...user}) => {
    const photoUrl = 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1678764677~exp=1678765277~hmac=7922cb330dd83ae1537d25985d33bce4d496d0e01628e0b6cabc3e752bd716c7'
    user.photoUrl = photoUrl
    return `
        <div class="flex md:flex-row sm:flex-col justify-start items-center px-4 ">
            <img src="${user.photoUrl}" alt="Foto de perfil"  class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 object-cover"/>
            <p class="flex flex-col pl-2 dark-color-2 w-full">
                <span class="dark-color text-sm">${user.name ?? '<i class="text-slate-500">no identificado</i>'} </span>
                <span class="dark-color-2 text-sm ">${user.rol ?? '<i class="text-slate-500">no identificado</i>'}</span>
                <span class="dark-color-2 text-sm ">${user.email ?? '<i class="text-slate-500">no identificado</i>'}</span>
            </p>
        </div>
    `
}

export default ProfileCard
