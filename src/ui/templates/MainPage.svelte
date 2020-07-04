<script>
    import Container from "../atoms/Container.svelte";
    import Hero from "../atoms/Hero.svelte";
    import Navbar from "../organisms/Navbar.svelte";
    import Footer from "../organisms/Footer.svelte";

    export let color = ''

    let navTransparent = true

    window.onscroll = function (e) {
        if (window.scrollY > 100) {
            navTransparent = false
        } else {
            navTransparent = true
        }
    };
</script>

<style type="text/scss">

</style>

<Hero
        size="medium"
        color={color}
        bold
>
    <div slot="hero-head">
        <Navbar fixed transparent={navTransparent} color={color}/>
    </div>
    <div slot="hero-body" class="mt-6">
        <slot name="hero-body-content"/>
    </div>
</Hero>

<slot name="main"/>

<Footer />
