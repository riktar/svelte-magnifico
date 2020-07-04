<script>
    import {user} from '../../stores/global.store';

    window.googleSignIn = (googleUser) => {
        const profile = googleUser.getBasicProfile()
        const auth = googleUser.getAuthResponse()

        $user = {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            avatar: profile.getImageUrl(),
            loggedIn: true,
            token: auth.id_token
        }
    };
    window.onLoadCallback = () => {
        const userLoggedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        if (!userLoggedIn) {
            $user = {
                loggedIn: false,
            }
        }
    }
</script>

<svelte:head>
    <script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></script>
</svelte:head>

<div class="g-signin2" data-longtitle="true" data-onsuccess="googleSignIn"/>
