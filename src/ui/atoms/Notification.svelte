<style type="text/scss">

</style>
<script>
    import {colorize} from '../utils/decorators'

    export let color = ''
    export let box = false
    export let light = false
    export let canClose = false
</script>

<div
        class:notification={true}
        class:box={box}
        class:is-light={light}
        class:mg-notification={true}
        use:colorize={color}
>
    {#if canClose}
        <button class="delete" on:click={(e) => e.target.parentNode.classList.remove('is-open')}></button>
    {/if}
    <slot/>
</div>
