<style type="text/scss">
    @import "../../styles/theme";
    @import "../../styles/sass/utilities/all";

    .mg-menu {
        padding-top: 15px;
        min-width: 220px;
    }

    :global(.mg-menu .menu-list a.is-active, .mg-menu .menu-list a.is-active:hover) {
        background-color: bulmaDarken($primary, 10);
    }

    :global(.mg-menu .menu-label) {
        padding-left: 14px;
    }

    :global(.mg-menu .menu-list a) {
        border-radius: 0;
    }

    :global(.mg-menu .menu-list a:hover) {
        background: $grey-lighter;
    }
</style>
<script>
    import {link, Link} from "svelte-routing";
    import Text from "../atoms/Text.svelte";
    import Icon from "../atoms/Icon.svelte";
    import Account from "../molecules/Account.svelte";

    function getProps({location, href, isPartiallyCurrent, isCurrent}) {
        const isActive = href === "/admin-ui" ? isCurrent : isPartiallyCurrent || isCurrent;

        // The object returned here is spread on the anchor element's attributes
        if (isActive) {
            return {class: "is-active"};
        }
        return {};
    }
</script>

<aside class="menu mg-menu">
    <div class="pl-4">
        <Account/>
    </div>

    <Text class="menu-label mt-5">
        General
    </Text>
    <ul class="menu-list">
        <li>
            <Link to="/admin-ui" getProps={getProps}>
                <Icon icon="tachometer-alt"/>
                Dashboard
            </Link>
        </li>
        <li>
            <Link to="/admin-ui/what-is-magnifico" getProps={getProps}>
                <Icon icon="question"/>
                What is Magnifico
            </Link>
        </li>
        <li>
            <Link to="/admin-ui/getting-started" getProps={getProps}>
                <Icon icon="flag"/>
                Getting started
            </Link>
        </li>
    </ul>
</aside>
