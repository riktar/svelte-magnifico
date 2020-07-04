<style type="text/scss">
</style>
<script>
    import {colorize, sizing, status} from "../utils/decorators"
    export let boxed = false
    export let notification = false
    export let color = ''
    export let child = false
    export let parent = false
    export let ancestor = false
    export let vertical = false
</script>
<div
        class={$$props.class}
        class:tile={true}

        class:box={boxed}
        class:notification={notification}
        use:colorize={color}

        class:is-ancestor={ancestor}
        class:is-parent={parent}
        class:is-child={child}
        class:is-vertical={vertical}
>
    <slot/>
</div>

