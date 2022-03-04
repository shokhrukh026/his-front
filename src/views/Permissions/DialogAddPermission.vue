<template>
<div class="modal fade" id="addPermissionModal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
      
            <div class="modal-body">
                <div class="modal__block">
                    <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="" @click="closeModal()">
                    <span class="modal__block_title">{{ $t('add_right') }}</span>

                    <div class="modal__block">

                        <div class="form-group w-100 mb-4">
                            <label>{{$t('name')}}</label>
                            <input type="text" class="form-control" v-model="permissionName">
                        </div>


                        <div class="modal__block_footer">
                            <div></div>
                            <button class="modal__block_btn_primary ml-4" @click="saveOrganizationData()">
                                <span class="ml-2">{{$t('save')}}</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { storeToRefs } from 'pinia';
import { organizationsStore } from '../../stores/organizations';
import { getCurrentInstance } from "vue";

export default {
    components: {
    },
    props: ['showModal'],
    setup(){
        const instance = getCurrentInstance();

        // const organizationsStorage = organizationsStore();
      
        let permissionName = ref('');
      

        onMounted(async() => {
        //   await organizationsStorage.GET_ORGANIZATIONS();
        })


        function closeModal(){
            instance.parent.setupState.openPermissionAddModal()
        }

        return{
            closeModal, permissionName,
        }
    },
}
</script>

<style>

</style>