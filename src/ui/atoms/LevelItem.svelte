<style type="text/scss">
</style>

<script>
    export let type = 'item'
</script>

<div
        class={$$props.class}
        class:mg-level-item={true}
        class:level-item={type === 'item'}
        class:level-left={type === 'left'}
        class:level-right={type === 'right'}
>
    <slot/>
</div>

