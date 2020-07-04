<style type="text/scss">
    .mg-media.is-vcentered {
        align-items: center;
    }
</style>

<script>
    export let vCenter = false
</script>

<div
        class={$$props.class}
        class:media={true}
        class:mg-media={true}
        class:is-vcentered={vCenter}
>
    <slot/>
</div>

