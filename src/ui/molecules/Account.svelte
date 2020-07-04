<style type="text/scss">
    @import "../../styles/theme";
    @import "../../styles/sass/utilities/all";
    .account-c {
        a {
            font-size: .75rem;
            color: bulmaDarken($primary, 10);
            margin-right: 7px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>

<script>
    import Media from "./Media.svelte";
    import MediaItem from "../atoms/MediaItem.svelte";
    import Text from "../atoms/Text.svelte";
    import Level from "./Level.svelte";
    import LevelItem from "../atoms/LevelItem.svelte";
    import GoogleButton from "../atoms/GoogleButton.svelte";
    import {user} from '../../stores/global.store';
    import Figure from "../atoms/Figure.svelte";

    const googleSignOut = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            $user = {
                id: '',
                name: '',
                email: '',
                loggedIn: false,
                avatar: ''
            }
        });
    }
</script>

<div class="account-c">
    {#if $user.loggedIn}
        <Media vCenter>
            <MediaItem type="left">
                <Figure src={$user.avatar} ratio="is-32x32" rounded/>
            </MediaItem>
            <MediaItem>
                <Text><strong>{$user.name}</strong></Text>
                <Level class="is-mobile">
                    <LevelItem type="left">
                        <LevelItem>
                            <a on:click={googleSignOut}>
                                Logout
                            </a>
                        </LevelItem>
                        <LevelItem>
                            <a>
                                Profile
                            </a>
                        </LevelItem>
                    </LevelItem>
                </Level>
            </MediaItem>
        </Media>
    {:else}
        <Level>
            <LevelItem>
                <GoogleButton/>
            </LevelItem>
        </Level>

    {/if}
</div>
