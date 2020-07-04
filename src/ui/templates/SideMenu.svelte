<style type="text/scss">
    @import "../../styles/theme";
    @import "../../styles/sass/utilities/all";

    .mg-page .mg-main-content {
        padding-left: $mg-sidebar-width;
        padding-top: $mg-navbar-height + 30;
        transition: $transition;
        background: $light;
        min-height: 100vh;

        &.is-side-close {
            padding-left: $mg-sidebar-width-collapsed;
            @media screen and (max-width: $tablet) {
                padding-left: 0;
            }
        }

        :global(&:not(.is-side-close)) {
            @media screen and (max-width: $tablet) {
                overflow: hidden;
                height: 100vh;
            }
        }

        :global(&:not(.is-side-close) > *) {
            @media screen and (max-width: $tablet) {
                min-width: 100vw;
            }
        }

    }

    .mg-sidebar {
        background: $white;
        border-right: 1px solid $grey-lighter;
        z-index: 39;
        height: 100%;
        width: $mg-sidebar-width;
        @media screen and (max-width: $tablet) {
            width: 100vw;
        }
        top: $mg-navbar-height;
        left: 0;
        position: fixed;
        transition: $transition;

        &.is-close {
            width: $mg-sidebar-width-collapsed;
            @media screen and (max-width: $tablet) {
                width: 0;
                border: 0;
            }

            .toggle-menu {
                @media screen and (max-width: $tablet) {
                    right: -23px;
                    top: -10px;
                }
            }
        }

        :global(&.is-close > *) {
            display: none;
        }

        & .toggle-menu {
            position: absolute;
            top: 70px;
            right: -9px;
            border-radius: 100%;
            height: 18px;
            width: 18px;
            background: $white;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .25);
            display: flex;
            justify-content: center;
            transition: $transition;
            color: $dark;
            z-index: 40;
            @media screen and (max-width: $tablet) {
                right: 10px;
                top: 20px;
            }

            &:hover {
                background: $primary;
                color: $primary-invert;
            }
        }
    }
</style>

<script>
    import Menu from "../organisms/Menu.svelte";
    import Navbar from "../organisms/Navbar.svelte";
    import Icon from "../atoms/Icon.svelte";
    import Snackbar from "../atoms/Snackbar.svelte";

    export let color = ''
    let sideMenuOpen = null
    if (window.innerWidth > 700) {
        sideMenuOpen = true
    } else {
        sideMenuOpen = false
    }

</script>

<Navbar fixed color={color} fluid/>
<div class="mg-page">
    <div class="mg-sidebar" class:is-close={!sideMenuOpen}>
        <a
                on:click={() => sideMenuOpen = !sideMenuOpen}
                class="toggle-menu">
            {#if sideMenuOpen}
                <Icon small icon="angle-left"/>{:else}
                <Icon small icon="angle-right"/>{/if}
        </a>
        <Menu/>
    </div>
    <div class="mg-main-content" class:is-side-close={!sideMenuOpen}>
        <slot name="main"/>
    </div>
</div>

<Snackbar />
