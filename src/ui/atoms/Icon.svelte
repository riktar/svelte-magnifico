<script>
    export let icon = ''
    export let hasTextInfo = false
    export let hasTextSuccess = false
    export let hasTextWarning = false
    export let hasTextDanger = false


    export let primary = false
    export let secondary = false

    export let large = false
    export let xlarge = false
    export let small = false
    export let text = false
    export let rounded = false

</script>
<style type="text/scss">
    @import "../../styles/theme";
    @import "../../styles/sass/utilities/all";

    span.is-xlarge{
        width: 80px;
        height: 80px;
        & i {
            font-size: 35px;
        }
    }
    span i.is-primary{
        color: $primary;
    }
    span.is-rounded{
        border-radius: 100%;
    }
    span.is-primary{
        background: linear-gradient(to left, bulmaDarken($primary, 10), $primary);
        & > i {
            color: $primary-invert;
        }
    }
</style>

{#if icon !== ''}
    <span
            class:icon={true}
            class:is-medium={large}
            class:is-xlarge={xlarge}
            class:is-small={small}
            class:has-text-info={hasTextInfo}
            class:has-text-success={hasTextSuccess}
            class:has-text-warning={hasTextWarning}
            class:has-text-danger={hasTextDanger}
            class:is-primary={primary && !text}
            class:is-rounded={rounded}
    >
  <i
          class={`${$$props.class} fa-${icon}`}
          class:is-primary={primary && text}
          class:fas={true}
          class:fa-2x={large}
          class:fa-4x={xlarge}
  ></i>
</span>
{/if}
