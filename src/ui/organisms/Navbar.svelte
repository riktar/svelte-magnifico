<style type="text/scss">
    @import "../../styles/theme";
    @import "../../styles/sass/utilities/all";

    :global(.mg-navbar.navbar) {
        transition: $transition;
        height: $mg-navbar-height;
    }

    :global(.mg-navbar.navbar.is-primary) {
        background-color: $primary;
    }

    :global(.mg-navbar.navbar.is-secondary) {
        background-color: $secondary
    }

    :global(.mg-navbar.navbar.is-transparent.is-primary), :global(.mg-navbar.navbar.is-transparent.is-secondary) {
        box-shadow: none;
        background-color: transparent;
    }

    :global(.mg-navbar .navbar-item) {
        padding: $mg-navbar-item-padding;
    }

    .mg-navbar .navbar-burger {
        height: auto;
    }

    :global(.mg-navbar.is-primary .navbar-burger) {
        color: $primary-invert;
    }

    :global(.mg-navbar.is-primary .navbar-burger) {
        color: $secondary-invert;
    }

    :global(#mobileNav) {
        width: 100vw;
        height: 100vh;
        background: $grey-lightest;
        position: fixed;
        left: 110%;
        top: 0;
        transition: $transition;
        z-index: 41;
    }

    :global(#mobileNav.is-in) {
        left: 0;
    }
</style>

<script>
    import {user} from '../../stores/global.store';
    import {link} from "svelte-routing";
    import {colorize} from "../utils/decorators"
    import Text from "../atoms/Text.svelte";
    import Tag from "../atoms/Tag.svelte";
    import Container from "../atoms/Container.svelte";


    export let color = ''
    export let transparent = false
    export let fluid = false
    export let fixed = false

    let navOpen = false

    const toggleNavMobile = ({target}) => {
        navOpen = !navOpen
    }
</script>

<nav
        class:is-transparent={transparent}
        class:navbar={true}
        class:mg-navbar={true}
        class:is-fixed-top={fixed}
        use:colorize={color}
        role="navigation" aria-label="main navigation"
>
    <Container fluid={fluid}>

        <div class="navbar-brand">

            <Text type="title" size="4" class="is-marginless is-paddingless navbar-item mr-3">
                Magnifico
                <Tag color="secondary" class="ml-2">Alpha</Tag>
            </Text>

            <div role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                 data-target="mobileNav"
                 on:click={toggleNavMobile}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <a use:link href="/" class="navbar-item">
                    Home
                </a>

                <a use:link href="/admin-ui" class="navbar-item">
                    Admin UI
                </a>
            </div>
        </div>
    </Container>
</nav>

<nav id="mobileNav" class="navbar-mobile" class:is-in={navOpen}>
    <button class="delete" on:click={toggleNavMobile}/>
</nav>

