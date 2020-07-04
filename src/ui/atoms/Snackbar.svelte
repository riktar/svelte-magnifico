<style type="text/scss">
    @import "../../styles/theme";
    @import "../../styles/sass/utilities/all";

    div {
        z-index: 41;
        position: fixed;
        top: -100px;
        right: 30px;
        transition: $transition;

        &.is-open {
            top: 30px;
        }
    }
</style>
<script>
    import {colorize} from '../utils/decorators'

    let color = 'info'
    let message = ''
    let isOpen = false

    window.addEventListener('mg-snackbar', function (e) {
        if(isOpen) {
            isOpen = false
        }
        setTimeout(() => {
            message = e.detail.message
            color = e.detail.color
            isOpen = true
        }, 200)

        setTimeout(() => {
            isOpen = false
        }, 3200)

        setTimeout(() => {
            message = ''
            color = ''
            isOpen = false
        }, 3400)

    }, false);

</script>

<div
        class:notification={true}
        class:box={true}
        class:mg-notification={true}
        class:is-info={color === 'info'}
        class:is-success={color === 'success'}
        class:is-warning={color === 'warning'}
        class:is-error={color === 'error'}
        class:is-open={isOpen}
>
    <button class="delete" on:click|preventDefault={(e) => isOpen = false}></button>
    {message}
</div>
