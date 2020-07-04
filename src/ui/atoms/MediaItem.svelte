<style type="text/scss">
</style>

<script>
    export let type = 'content'
</script>

<div
        class={$$props.class}
        class:mg-media-item={true}
        class:media-content={type === 'content'}
        class:media-left={type === 'left'}
        class:media-right={type === 'right'}
>
    <slot/>
</div>

