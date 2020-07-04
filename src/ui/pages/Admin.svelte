<script>
    import Template from '../templates/SideMenu.svelte'
    import {Router, Link, Route} from "svelte-routing";
    import Magnifico from "./admin/Magnifico.svelte";
    import GettingStarted from "./admin/GettingStarted.svelte";
    import Dashboard from "./admin/Dashboard.svelte";
    import Text from "../atoms/Text.svelte";

</script>

<Template color="primary">
    <section class="main" slot="main">
        <Router>
            <Route path="what-is-magnifico" component={Magnifico} />
            <Route path="getting-started" component={GettingStarted} />
            <Route path="" component={Dashboard} />
        </Router>
    </section>
</Template>

