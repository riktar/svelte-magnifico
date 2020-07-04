<style type="text/scss">
</style>
<script>
    import {colorize, sizing, status} from "../utils/decorators"

    export let color = ''
    export let size = ''
</script>

<span
        class={$$props.class}
        class:tag={true}

        use:colorize={color}
        use:sizing={size}
>

    <slot/>
</span>
