<style type="text/scss">
</style>

<script>
    export let src = ''
    export let rounded = false
    export let ratio = ''
</script>

<figure
        class:image={true}
        class="{ratio}"
>
    <img
            src={src}
            class:is-rounded={rounded}
    />
</figure>
