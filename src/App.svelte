<script>
    import {Router, Link, Route} from "svelte-routing";
    import Home from "./ui/pages/Home.svelte";
    import Admin from "./ui/pages/Admin.svelte";
</script>

<Router>
    <Route path="/admin-ui/*">
        <Admin/>
    </Route>
    <Route path="/">
        <Home/>
    </Route>
</Router>
