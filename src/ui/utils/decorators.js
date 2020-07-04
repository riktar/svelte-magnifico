export function colorize(node, color = '') {
    switch (color) {
        case 'primary':
            node.classList.toggle('is-primary')
            break
        case 'secondary':
            node.classList.toggle('is-secondary')
            break
        case 'link':
            node.classList.toggle('is-link')
            break
        case 'success':
            node.classList.toggle('is-success')
            break
        case 'info':
            node.classList.toggle('is-info')
            break
        case 'warning':
            node.classList.toggle('is-warning')
            break
        case 'danger':
            node.classList.toggle('is-danger')
            break
        case 'white':
            node.classList.toggle('is-white')
            break
        case 'black':
            node.classList.toggle('is-black')
            break
    }
}

export function sizing(node, size = '') {
    switch (size) {
        case 'small':
            node.classList.toggle('is-small')
            break
        case 'medium':
            node.classList.toggle('is-medium')
            break
        case 'normal':
            node.classList.toggle('is-normal')
            break
        case 'large':
            node.classList.toggle('is-large')
            break
    }
}

export function sizingTypo(node, size = '') {
    switch (size) {
        case '1':
            node.classList.toggle('is-size-1')
            break
        case '2':
            node.classList.toggle('is-size-2')
            break
        case '3':
            node.classList.toggle('is-size-3')
            break
        case '4':
            node.classList.toggle('is-size-4')
            break
        case '5':
            node.classList.toggle('is-size-5')
            break
        case '6':
            node.classList.toggle('is-size-6')
            break
    }
}

export function colorizeTypo(node, color = '') {
    switch (color) {
        case 'primary':
            node.classList.toggle('has-text-primary')
            break
        case 'secondary':
            node.classList.toggle('has-text-secondary')
            break
        case 'link':
            node.classList.toggle('has-text-link')
            break
        case 'success':
            node.classList.toggle('has-text-success')
            break
        case 'info':
            node.classList.toggle('has-text-info')
            break
        case 'warning':
            node.classList.toggle('has-text-warning')
            break
        case 'danger':
            node.classList.toggle('has-text-danger')
            break
        case 'white':
            node.classList.toggle('has-text-white')
            break
        case 'black':
            node.classList.toggle('has-text-black')
            break
        case 'grey':
            node.classList.toggle('has-text-grey')
            break
        case 'grey-light':
            node.classList.toggle('has-text-grey-light')
            break
        case 'grey-lighter':
            node.classList.toggle('has-text-grey-lighter')
            break
    }
}



export function colorizeBackground(node, color = '') {
    switch (color) {
        case 'primary':
            node.classList.toggle('has-background-primary')
            break
        case 'secondary':
            node.classList.toggle('has-background-secondary')
            break
        case 'link':
            node.classList.toggle('has-background-link')
            break
        case 'success':
            node.classList.toggle('has-background-success')
            break
        case 'info':
            node.classList.toggle('has-background-info')
            break
        case 'warning':
            node.classList.toggle('has-background-warning')
            break
        case 'danger':
            node.classList.toggle('has-background-danger')
            break
        case 'white':
            node.classList.toggle('has-background-white')
            break
        case 'black':
            node.classList.toggle('has-background-black')
            break
        case 'grey':
            node.classList.toggle('has-background-grey')
            break
        case 'grey-light':
            node.classList.toggle('has-background-grey-light')
            break
        case 'grey-lighter':
            node.classList.toggle('has-background-grey-lighter')
            break
    }
}

export function status(node, states = {}) {
    if (states.hasOwnProperty('active') && states.active) {
        node.classList.toggle('is-active')
    }
    if (states.hasOwnProperty('focused') && states.focused) {
        node.classList.toggle('is-focused')
    }
    if (states.hasOwnProperty('hovered') && states.hovered) {
        node.classList.toggle('is-hovered')
    }
    if (states.hasOwnProperty('loading') && states.loading) {
        node.classList.toggle('is-loading')
    }
    if (states.hasOwnProperty('disabled') && states.disabled) {
        node.disabled = true
    }
}

