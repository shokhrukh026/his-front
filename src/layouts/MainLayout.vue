<template>
<div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <div class="content-wrapper">
            <div class="content-header">@yield("contentHeader")</div>

            <!-- @include('errors.validation') -->

            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
export default {
    components: {
        Navbar,
        Sidebar,
        Footer
    }
}
</script>

<style>

</style>