<template>
<div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <Navbar></Navbar>
        <Sidebar :class="sidebarCollapse ? '' : 'sidebar__mobile_open'"></Sidebar>
        <div :class="sidebarCollapse ? 'overlay' : ''" @click="sidebarCollapse = !sidebarCollapse"></div>
        <div class="content-wrapper" :class="sidebarCollapse ? '' : 'sidebar__close'">
            <!-- <div class="content-header">@yield("contentHeader")</div> -->

            <!-- @include('errors.validation') -->

            <div class="content">
                <!-- <section class="home-section">
                    <div class="home-content">
                    <i class='bx bx-menu' ></i>
                    <span class="text">Drop Down Sidebar</span>
                    </div>
                </section> -->
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</div>
</template>


<script>
import { mainStore } from '../stores/main'
import { storeToRefs } from 'pinia'

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
    
export default {
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    setup() {
        const store = mainStore()
        const { sidebarCollapse } = storeToRefs(store)


        return {
        // you can return the whole store instance to use it in the template
        store,
        sidebarCollapse
        }
    },
    mounted(){
      
    }

}
</script>

<style>

</style>