<style type="text/scss">
</style>
<script>
    export let row = false
</script>

<div
        class={$$props.class}
        class:columns={row}
        class:column={!row}
>
    <slot/>
</div>

