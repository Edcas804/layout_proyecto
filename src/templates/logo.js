const Logo = () => {
    const logoUrl = 'https://d3trkj7zmmj4c7.cloudfront.net/public/logo_public.png'
    return `
        <div class="flex justify-center items-center">
            <img src="${logoUrl}" alt="Logo" class="h-14 rounded-md object-cover">
        </div>
    `
}

export default Logo