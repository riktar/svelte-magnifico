<style type="text/scss">
    @import "../../styles/magnifico";

    :global(.header-fullwidth.is-primary) {
        background: linear-gradient(to left, bulmaDarken($primary, 7), $primary);
    }

    :global(.header-fullwidth.is-secondary) {
        background: linear-gradient(to left, bulmaDarken($secondary, 7), $secondary);
    }

    div.main {
        padding-top: 30px !important;
    }
</style>

<script>
    import Navbar from '../organisms/Navbar.svelte'
    import Container from '../atoms/Container.svelte'
    import {colorize, sizing, status} from "../utils/decorators"

    export let color = ''
</script>



<header class="header-fullwidth" use:colorize={color}>
    <Container>
        <Navbar color={color} transparent/>
    </Container>
</header>
<Container>
    <slot name="main"/>
</Container>
