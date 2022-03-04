<template>
<div class="modal fade" id="addRoleModal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
         
            <div class="modal-body">
                <div class="modal__block">
                    <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="" @click="closeModal()">
                    <span class="modal__block_title">Добавить роль</span>

                    <div class="modal__block">


                        <span class="modal__block_subtitle">{{$t('main_data')}}</span>

                        <div class="modal__block_form">
                            <div class="modal__block_form_left">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('name')}}</label>
                                        <input type="text" class="form-control" v-model="roleName">
                                    </div>
                                </div>
                            </div>
                            <div class="modal__block_form_right">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('description')}}</label>
                                        <input type="text" class="form-control" v-model="roleDescription">
                                    </div>
                                </div>
                            </div>
                        </div>



                        <span class="modal__block_subtitle mb-4">{{$t('permissions')}}</span>
                        <div class="modal__block_form mb-4">
                            <div class="col-3 p-0">
                                <div class="d-flex flex-direction-column">
                                    <div class="mb-2 d-flex align-center">
                                        <input type="checkbox" aria-label="Checkbox for following text input">
                                        <span class="ml-1 mb-3px">users_index</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 p-0">
                                <div class="d-flex flex-direction-column">
                                    <div class="mb-2 d-flex align-center">
                                        <input type="checkbox" aria-label="Checkbox for following text input">
                                        <span class="ml-1 mb-3px">users_index</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 p-0">
                                <div class="d-flex flex-direction-column">
                                    <div class="mb-2 d-flex align-center">
                                        <input type="checkbox" aria-label="Checkbox for following text input">
                                        <span class="ml-1 mb-3px">users_index</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 p-0">
                                <div class="d-flex flex-direction-column">
                                    <div class="mb-2 d-flex align-center">
                                        <input type="checkbox" aria-label="Checkbox for following text input">
                                        <span class="ml-1 mb-3px">users_index</span>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="modal__block_footer">
                            <!-- <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                            <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button> -->
                            <div></div>
                            <button class="modal__block_btn_primary ml-4" @click="saveOrganizationData()">
                                <span class="ml-2">{{$t('save')}}</span>
                                <!-- <img src="../../assets/icons/arrow-right.svg" class="ml-2"/> -->
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
        let roleName = ref('');
        let roleDescription = ref('');

        onMounted(async() => {
        //   await organizationsStorage.GET_ORGANIZATIONS();
        })





        function closeModal(){
            instance.parent.setupState.openRoleAddModal()
        }

        return{
            roleName, roleDescription,
            closeModal,
         
        }
    },
}
</script>

<style>

</style>