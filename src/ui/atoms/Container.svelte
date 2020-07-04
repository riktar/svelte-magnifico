<style type="text/scss">
</style>
<script>
    export let fluid = false
    export let widescreen = false
    export let fullHD = false
</script>

<div
        class={$$props.class}
        class:container={true}
        class:is-fluid={fluid}
        class:is-widescreen={widescreen}
        class:is-fullhd={fullHD}
>
    <slot/>
</div>

