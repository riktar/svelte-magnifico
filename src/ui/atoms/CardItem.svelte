<style type="text/scss">
</style>

<script>
    import {colorizeBackground, colorizeTypo} from "../utils/decorators"
    export let type = 'content'
    export let color = ''
    export let bgColor = ''
</script>

<div
        class={$$props.class}
        class:mg-card-item={true}
        class:card-content={type === 'content'}
        class:card-image={type === 'image'}
        class:card-header={type === 'header'}
        class:card-header-title={type === 'header-title'}
        class:card-header-icon={type === 'header-icon'}
        class:card-footer={type === 'footer'}
        class:card-footer-item={type === 'footer-item'}
        use:colorizeBackground={bgColor}
        use:colorizeTypo={color}

>
    <slot/>
</div>

