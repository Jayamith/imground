function imground(options) {
    let images = document.querySelectorAll('.imground');

    if (options.border_type === high)
        options.border_type = '40%'
    else
        options.shadow_type = '20%'

    images.forEach(image => {
        image.style.borderRadius = `${options.border_type} `

        if (options.padding) {
            image.style.padding = '1em';

        }
    })
}

module.exports.imground = imground;
