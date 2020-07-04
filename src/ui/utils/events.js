export const snackbar = (opts) => {
    const e = new CustomEvent('mg-snackbar', {detail: opts})
    window.dispatchEvent(e)
}
