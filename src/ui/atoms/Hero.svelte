<script>
    import {colorize, sizing, status} from "../utils/decorators"

    export let color = ''
    export let size = ''
    export let bold = false
</script>

<style type="text/scss">
</style>

<div
        class={$$props.class}
        class:hero={true}
        class:magnifico-hero={true}
        class:is-bold={bold}
        use:colorize={color}
        use:sizing={size}
>
    <div class="hero-head">
        <slot name="hero-head"/>
    </div>
    <div class="hero-body">
        <slot name="hero-body"/>
    </div>
    <div class="hero-foot">
        <slot name="hero-foot"/>
    </div>
</div>
