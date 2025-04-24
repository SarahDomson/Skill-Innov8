// tailwind customization

tailwind.config = {
    theme: {
        extend: {
            // agility-primary, agility-secondary custom classes for color
            colors: {
                "agility-primary": '#193894',
                "agility-secondary": '#252B42',
            },
            // font-roboto, font-montserrat, font-poppins custom classes for fonts used in pages
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'san-serif']
            },
            backgroundImage: {
                'contact-gradient': 'conic-gradient(from -45.28deg at 61.07% 61.25%, #BBD2FF 0deg, #FFFFFF 54.37deg, #F0F5FF 121.29deg, #BBD2FF 360deg)',
            }
        }
    }
}