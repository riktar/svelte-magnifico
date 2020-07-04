<script>
    import Text from "../../atoms/Text.svelte";
    import Container from "../../atoms/Container.svelte";
    import {user} from "../../../stores/global.store"
    import Card from "../../molecules/Card.svelte";
    import CardItem from "../../atoms/CardItem.svelte";
    import Figure from "../../atoms/Figure.svelte";
    import Column from "../../atoms/Column.svelte";
    import Account from "../../molecules/Account.svelte";
    import Button from "../../atoms/Button.svelte";
    import Icon from "../../atoms/Icon.svelte";
    import {snackbar} from "../../utils/events"
    import Notification from "../../atoms/Notification.svelte";
    import Box from "../../atoms/Box.svelte";
    import Tag from "../../atoms/Tag.svelte";
</script>

<Container fluid>
    <Text size="4" type="title" color="grey">Welcome to your Dashboard {#if $user.loggedIn} - {$user.name}{/if}</Text>
    <Column row>
        <Column class="is-4">
            <Card>
                <CardItem type="image">
                    <Figure src="https://images.unsplash.com/photo-1592764532898-1c1feead799e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                </CardItem>
                <CardItem>
                    <Account/>
                    <Text type="title" class="mt-5">Lorem ipsum dolor</Text>
                    <Text type="subtitle">Lorem ipsum dolor</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <div class="buttons mt-5 is-right">
                        <Button on:click={() => snackbar({color: 'warning', message:`Warning! You must accept that!`})}>
                            Not Agree
                        </Button>
                        <Button color="primary"
                                on:click={() => snackbar({color: 'success', message:`Ok! You've accepted this!`})}>
                            I Agree
                        </Button>
                    </div>
                </CardItem>
            </Card>
        </Column>
        <Column class="is-8">
            <Card>
                <CardItem type="header" bgColor="primary">
                    <CardItem type="header-title" color="white">
                        <Text>Lorem ipsum dolor</Text>
                    </CardItem>
                    <CardItem type="header-icon" color="white">
                        <Icon icon="trash"/>
                    </CardItem>
                </CardItem>
                <CardItem>
                    <Text type="title">Lorem ipsum dolor</Text>
                    <Text type="subtitle">Lorem ipsum dolor</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Text>
                </CardItem>
            </Card>
            <Card class="mt-5">
                <CardItem type="header">
                    <CardItem type="header-title" color="secondary">
                        <Text>Lorem ipsum dolor</Text>
                    </CardItem>
                    <CardItem type="header-icon">
                        <Icon icon="check"/>
                        <Icon icon="redo"/>
                        <Icon icon="trash"/>
                    </CardItem>
                </CardItem>
                <CardItem>
                    <Text type="title">Lorem ipsum dolor</Text>
                    <Text type="subtitle">Lorem ipsum dolor</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Text>
                </CardItem>
            </Card>
            <Card class="mt-5">
                <CardItem type="header" bgColor="danger">
                    <CardItem type="header-title" color="white">
                        <Text>Lorem ipsum dolor</Text>
                    </CardItem>
                </CardItem>
                <CardItem>
                    <Text type="title">Lorem ipsum dolor</Text>
                    <Text type="subtitle">Lorem ipsum dolor</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Text>
                </CardItem>
            </Card>
        </Column>
    </Column>

</Container>
