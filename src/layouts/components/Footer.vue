<template>
 <div class="main-footer d-print-none border-top-none" :class="sidebarCollapse ? '' : 'sidebar__close'">
	<div class="d-flex justify-content-between">
        &copy; {{$t('ministry_of_health_of_the_republic_of_uzb')}}, {{new Date().getFullYear()}}
        <div class="d-flex brand-text text-bold">
            <span class="mr-2">{{$t('techsupport')}}:</span>
            <a target="_blank" href="tel:+998712027371">+99871 202-73-71</a>
        </div>
    </div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
// import { useI18n } from "vue-i18n";
import { mainStore } from '../../stores/main'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = mainStore()
    const { sidebarCollapse } = storeToRefs(store)


    return {
      store,
      sidebarCollapse
    }
  }
}
</script>

<style>

</style>