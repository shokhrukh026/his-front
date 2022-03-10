<template>
<div class="modal fade" id="deleteOrganizationModal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="modal__block">
                    <!-- <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="" @click="closeModal()"> -->
                    <span class="modal__block_title">Удаление организации</span>

                    <div v-if="organizationModalSteps == 0" class="modal__block">


                        <span class="modal__block_subtitle">{{$t('main_data')}}</span>

                        <div class="modal__block_form">
                            Вы действительно хотите удалить организацию?
                        </div>

                        <div class="d-flex justify-content-end w-100">
                            <!-- <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                            <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button> -->
                            
                            <button class="modal__block_btn_primary ml-4" @click="goFurther()">
                                <span>{{$t('cancel')}}</span>
                                <!-- <img src="../../assets/icons/arrow-right.svg" class="ml-1"/> -->
                            </button>
                            <button class="modal__block_btn_primary ml-4" @click="goFurther()">
                                <span>{{$t('delete')}}</span>
                                <!-- <img src="../../assets/icons/arrow-right.svg" class="ml-1"/> -->
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
        let regionServiceInputs = ref([
            {id: 1}
        ]);
        let phoneContactInputs = ref([
          {phone: ''}
        ]);
        let emailContactInputs = ref([
          {email: ''}
        ]);
        let organizationAdd = reactive({
            inn: '',
            top_level: '',
            organization_type: '',
            scale_of_med_services: '',
            med_service_type: '',
            organizational_legal_form: '',
            government_body: '',
            institution_code: '',
        });




        // =============== GET_LISTS START ===============
        let topLevelList = ref([])
        let parentList = ref([])
        let typeList = ref([])
        let levelList = ref([])
        let serviceTypeList = ref([])
        let kopfList = ref([])
        let dep_affiliationList = ref([])
        let countryList = ref([])
        let cityList = ref([])
        let regionList = ref([])
        let neighborhoodList = ref([])
        let serviceAreaList = ref([])
        let urlList = ref([])
        // =============== GET_LISTS END ===============







        const organizationsStorage = organizationsStore();
        // const { count } = store //NOT REACTIVE
        // const { count } = storeToRefs(store) //REACTIVE
        // console.log(count) // => 0
        // store.count++;
        // store.increment(2);

        let organizationModalSteps = ref(0);
        
        // const loginToAccount = async () => {
        //     await authStorage.SIGN_IN({username: username.value, password: password.value})
        // };

        let language = ref(1);
        let languageOptions = ref([
            {id: 1, title: 'UZ'},
            {id: 2, title: 'EN'},
            {id: 3, title: 'RU'},
        ]);

        onMounted(async() => {
          await organizationsStorage.GET_ORGANIZATIONS();
        })





        async function saveOrganizationData(){
          // await organizationsStorage.GET_ORGANIZATIONS();
        }










        // =============== ADD_AND_REMOVE_INPUTS START ===============
        function addRegionServiceInput(){
          if(this.regionServiceInputs.length >= 5){
              console.log('Error!')
          }else{
              this.regionServiceInputs.push({id: this.regionServiceInputs.length});
          }
        }
        function removeRegionServiceInput(index){
            this.regionServiceInputs.splice(index, 1);
        }
        function addPhoneContactInput(){
          if(this.phoneContactInputs.length >= 5){
              console.log('Error!')
          }else{
              this.phoneContactInputs.push({phone: ''});
          }
        }
        function removePhoneContactInput(index){
            this.phoneContactInputs.splice(index, 1);
        }
        function addEmailContactInput(){
          if(this.emailContactInputs.length >= 5){
              console.log('Error!')
          }else{
              this.emailContactInputs.push({email: ''});
          }
        }
        function removeEmailContactInput(index){
            this.emailContactInputs.splice(index, 1);
        }
        // =============== ADD_AND_REMOVE_INPUTS END ===============
















        function closeModal(){
          instance.parent.type.methods.openOrganizationAddModal()
        }

        return{
            language, languageOptions,
            organizationModalSteps, regionServiceInputs, organizationAdd,
            phoneContactInputs, emailContactInputs,



            topLevelList, parentList, typeList, levelList, levelList,
            serviceTypeList, kopfList, dep_affiliationList, countryList, cityList, 
            regionList, neighborhoodList, serviceAreaList, urlList,


            addRegionServiceInput, removeRegionServiceInput, closeModal,
            addPhoneContactInput, removePhoneContactInput, 
            addEmailContactInput, removeEmailContactInput,
            saveOrganizationData
        }
    },

    methods: {
        confirm() {
            // some code...
            this.show = false
        },
        cancel(close) {
            // some code...
            close()
        },
        openOrganizationAddModal(){
          if(this.showModal){
            $('#addOrganizationModal').modal('toggle')
          }
        },
        goFurther(){
            this.organizationModalSteps++;
        },
        goBack(){
            this.organizationModalSteps--;
        }
    }
}
</script>

<style>

</style>