<script>
    import {user} from "../../stores/global.store"
    import Template from '../templates/MainPage.svelte'
    import Container from '../atoms/Container.svelte'
    import Button from "../atoms/Button.svelte";
    import Column from "../atoms/Column.svelte";
    import Icon from "../atoms/Icon.svelte";
    import {navigate} from "svelte-routing";
    import Tile from "../atoms/Tile.svelte";
    import Box from "../atoms/Box.svelte";
    import Hero from "../atoms/Hero.svelte";
    import Text from "../atoms/Text.svelte";
    import Figure from "../atoms/Figure.svelte";
    import Section from "../atoms/Section.svelte";
</script>

<style type="text/scss">
    @import "../../styles/theme";
    @import "../../styles/sass/utilities/all";

    :global(.mg-section-one) {
        margin-top: -100px;

        @media (max-width: $desktop) {
            & {
                margin-top: 15px;
                padding: 1.5rem;
            }
        }
    }
</style>

<Template color="primary">

    <div slot="hero-body-content">
        <Container>
            <Column row class="is-vcentered">
                <Column class="is-7 has-text-centered-mobile">
                    <Text type="title" size="1" color="white">
                        Build your next project faster with Magnifico
                    </Text>
                    <Text type="subtitle" size="4" color="white" class="mt-3">Magnifico is an Atomic Design System for
                        Svelte
                        that can let you
                        to
                        make beautiful web applications.
                    </Text>
                    <Button size="large" color="secondary"
                            on:click={() => { navigate('/admin-ui') }}>
                        Discover Magnifico
                    </Button>
                </Column>
                <Column class="is-hidden-mobile">
                    <Figure src="images/home.svg"/>
                </Column>
            </Column>
        </Container>
    </div>

    <div slot="main">
        <Section class="mg-section-one">
            <Container>
                <Tile ancestor>
                    <Tile class="mb-4">
                        <Box padding="2" class="has-text-centered">
                            <Icon icon="atom" primary rounded xlarge/>
                            <div class="mt-5">
                                <Text size="3" type="title">Atomic Design</Text>
                                <Text size="6" type="subtitle">Our customizable, atomic design system makes creating
                                    your next project <strong>fast and easy!</strong>
                                </Text>
                            </div>
                        </Box>
                    </Tile>
                    <Tile class="is-1"/>
                    <Tile class="mb-4">
                        <Box padding="2" class="has-text-centered">
                            <Icon icon="code" primary rounded xlarge/>
                            <div class="mt-5">
                                <Text size="3" type="title">Based on Bulma</Text>
                                <Text size="6" type="subtitle">Bulma is a free, open source CSS framework based on
                                    Flexbox and used by more than 200,000 developers.
                                </Text>
                            </div>
                        </Box>
                    </Tile>
                    <Tile class="is-1"/>
                    <Tile class="mb-4">
                        <Box padding="2" class="has-text-centered">
                            <Icon icon="grip-vertical" primary rounded xlarge/>
                            <div class="mt-5">
                                <Text size="3" type="title">Modern Components</Text>
                                <Text size="6" type="subtitle">Featuring carefully crafted, mobile-first components,
                                    your end product will function beautifully on any device!
                                </Text>
                            </div>
                        </Box>
                    </Tile>
                </Tile>
            </Container>
        </Section>

        <Section>
            <Container>
                <Column row>
                    <Column class="has-text-centered mt-3">
                        <Text size="3" type="title">Lorem ipsum dolor est</Text>
                        <Text type="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </Column>
                </Column>
            </Container>
        </Section>

        <Hero color="secondary" bold>
            <div class="has-text-centered" slot="hero-body">
                <Text size="2" type="title">
                    Lorem ipsum dolor
                </Text>
                <Text size="4" type="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </div>
        </Hero>

        <Section>
            <Container>
                <Column row class="is-vcentered">
                    <Column>
                        <Figure src="images/details.svg"/>
                    </Column>
                    <Column>
                        <Tile ancestor class="mb-6">
                            <Tile parent vertical>
                                <Tile child>
                                    <Text type="title">Lorem ipsum dolor</Text>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Text>
                                </Tile>
                            </Tile>
                        </Tile>
                        <Tile ancestor>
                            <Tile vertical>
                                <Tile parent>
                                    <Tile child>
                                        <Box class="mb-4">
                                            <Text type="title" size="5">Lorem ipsum dolor</Text>
                                            <Text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Text>
                                            <Button size="small" color="primary">More</Button>
                                        </Box>
                                    </Tile>
                                    <Tile class="is-1"/>
                                    <Tile child>
                                        <Box>
                                            <Text type="title" size="5">Lorem ipsum dolor</Text>
                                            <Text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed
                                                do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Text>
                                            <Button size="small" color="primary">More</Button>
                                        </Box>
                                    </Tile>
                                </Tile>
                                <Tile parent>
                                    <Tile child>
                                        <Box class="mb-4">
                                            <Text type="title" size="5">Lorem ipsum dolor</Text>
                                            <Text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Text>
                                            <Button size="small" color="primary">More</Button>
                                        </Box>
                                    </Tile>
                                    <Tile class="is-1"/>
                                    <Tile child>
                                        <Box>
                                            <Text type="title" size="5">Lorem ipsum dolor</Text>
                                            <Text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed
                                                do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Text>
                                            <Button size="small" color="primary">More</Button>
                                        </Box>
                                    </Tile>
                                </Tile>
                            </Tile>
                        </Tile>
                    </Column>
                </Column>
            </Container>
        </Section>
    </div>
</Template>

