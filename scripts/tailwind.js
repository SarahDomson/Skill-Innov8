// tailwind customization

tailwind.config = {
    theme: {
        extend: {
            // agility-primary, agility-secondary custom classes for color
            colors: {
                "agility-primary": '#193894',
                "agility-secondary": '#252B42',
            },
            // added font-roboto, font-montserrat custom classes for font
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            }
        }
    }
}