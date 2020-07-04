<style type="text/scss">
</style>

<script>
    import {sizingTypo, colorizeTypo} from '../utils/decorators'

    export let size = ''
    export let color = ''
    export let type = ''
</script>

<p
        class={$$props.class}
        use:sizingTypo={size}
        use:colorizeTypo={color}

        class:title={type === 'title'}
        class:subtitle={type === 'subtitle'}
>
    <slot/>
</p>

