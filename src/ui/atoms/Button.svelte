<style type="text/scss">
</style>
<script>
    import {colorize, sizing, status} from "../utils/decorators"
    import Icon from './Icon.svelte'

    export let icon = false
    export let anchor = 'left'

    export let color = ''
    export let size = ''
    export let state = []

    export let outlined = false
    export let inverted = false
    export let rounded = false
    export let text = false
</script>

<button
        class={$$props.class}
        class:button={true}

        class:is-inverted={inverted}
        class:is-outlined={outlined}
        class:is-rounded={rounded}
        class:is-text={text}

        on:click
        use:colorize={color}
        use:sizing={size}
        use:status={state}
>

    {#if icon && anchor === 'left'}
        <Icon {icon}/>
    {/if}
    <span><slot/></span>
    {#if icon && anchor === 'right'}
        <Icon {icon}/>
    {/if}
</button>
