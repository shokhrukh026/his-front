<template>
<div class="modal fade" id="addEmployeeModal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg active">
        <div class="modal-content">
            <!-- <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div> -->
            <div class="modal-body">
                <div class="modal__block">
                    <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="" @click="closeModal()">
                    <span class="modal__block_title">{{ $t('add_employee') }}</span>

                    <div v-if="organizationModalSteps == 0" class="modal__block">


                        <span class="modal__block_subtitle">{{$t('main_data')}}</span>

                        <div class="modal__block_form">
                            <div class="modal__block_form_left">
                                <div class="d-flex align-center w-100">

                                    <div class="form-group">
                                        <label>{{$t('pin')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div>

                                    <button class="modal__block_btn_primary ml-2" style="margin: 12px 0 0 0;" @click="goFurther()">
                                        <span>{{$t('find')}}</span>
                                    </button>

                                </div>
                                <div class="w-100 d-flex">
                                    <img src="../../assets/img/PhotoPlace.svg" class=""/>
                                    <div class="ml-3">
                                        <div class="form-group">
                                            <label>{{$t('date_of_birth')}}</label>
                                            <input type="text" class="form-control" v-model="organizationAdd.inn">
                                        </div>
                                        <div class="form-group">
                                            <label>{{$t('nationality')}}</label>
                                            <input type="text" class="form-control" v-model="organizationAdd.inn">
                                        </div> 
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('userGender')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div> 
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('citizenship')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div> 
                                </div>
                               
                            </div>

                            <div class="modal__block_form_right">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('personName')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('surname')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div>
                                </div>
                                <div class="w-100">
                                   <div class="form-group">
                                        <label>{{$t('middle_name')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div>
                                </div>
                                <div class="w-100">
                                   <div class="form-group">
                                        <label>{{$t('middle_name')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div>
                                </div>
                                <div class="w-100">
                                   <div class="form-group">
                                        <label>{{$t('birth_place')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        <div class="modal__block_footer">
                            <!-- <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                            <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button> -->
                            <div></div>
                            
                            <button class="modal__block_btn_primary ml-4" @click="goFurther()">
                                <span>{{$t('further')}}</span>
                                <img src="../../assets/icons/arrow-right.svg" class="ml-1"/>
                            </button>
                        </div>


                    </div>


                    <div v-else-if="organizationModalSteps == 1" class="modal__block">


                        <span class="modal__block_subtitle">{{$t('identity_document')}}</span>

                        <div class="modal__block_form">
                        <!-- <div class="d-flex align-center flex-direction-column justify-space-between h-100">
                          <div class="mt-5">O'zbekcha</div>
                          <div class="mt-5">O'zbekcha</div>
                        </div> -->
                            <div class="modal__block_form_left">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('identity_card_type')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('identity_card_number')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('final_date')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                            </div>

                            <div class="modal__block_form_right">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('issuer_name')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('start_date')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="modal__block_footer">
                            <!-- <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                            <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button> -->
                            <button class="modal__block_btn_primary ml-4" @click="goBack()">
                                <img src="../../assets/icons/arrow-right.svg" class="mr-2 rotate_180deg"/>
                                <span class="mr-2">{{$t('back')}}</span>
                            </button>

                            <button class="modal__block_btn_primary ml-4" @click="goFurther()">
                                <span class="ml-2">{{$t('further')}}</span>
                                <img src="../../assets/icons/arrow-right.svg" class="ml-2"/>
                            </button>
                        </div>


                    </div>







                    <div v-else-if="organizationModalSteps == 2" class="modal__block">


                        
                        <span class="modal__block_subtitle">{{$t('current_workplaces')}}</span>

                        <div class="modal__block_form">
                            <div class="modal__block_form_left">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('organization')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                        class="form-control mb-3">
                                            <template #no-options>
                                                Нет результатов
                                            </template>
                                            <template #option>
                                                <div class="">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>
                                            <template #selected-option>
                                                <div class="selected">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>

                                            <template #list-footer>
                                                <li class="pagination">
                                                    <button :disabled="page4 == 1" @click.prevent="getPrevOrganizationList()">Предыдущее</button>
                                                    <button :disabled="page4 == pageCount4" @click.prevent="getNextOrganizationList()">Следующее</button>
                                                </li>
                                            </template>
                                        </v-select>
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('position')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                        class="form-control mb-3">
                                            <template #no-options>
                                                Нет результатов
                                            </template>
                                            <template #option>
                                                <div class="">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>
                                            <template #selected-option>
                                                <div class="selected">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>

                                            <template #list-footer>
                                                <li class="pagination">
                                                    <button :disabled="page4 == 1" @click.prevent="getPrevOrganizationList()">Предыдущее</button>
                                                    <button :disabled="page4 == pageCount4" @click.prevent="getNextOrganizationList()">Следующее</button>
                                                </li>
                                            </template>
                                        </v-select>
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('postal_code')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('latitude')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                            </div>

                            <div class="modal__block_form_right">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('department')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                        class="form-control mb-3">
                                            <template #no-options>
                                                Нет результатов
                                            </template>
                                            <template #option>
                                                <div class="">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>
                                            <template #selected-option>
                                                <div class="selected">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>

                                            <template #list-footer>
                                                <li class="pagination">
                                                    <button :disabled="page4 == 1" @click.prevent="getPrevOrganizationList()">Предыдущее</button>
                                                    <button :disabled="page4 == pageCount4" @click.prevent="getNextOrganizationList()">Следующее</button>
                                                </li>
                                            </template>
                                        </v-select>
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('neighborhood')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                        class="form-control mb-3">
                                            <template #no-options>
                                                Нет результатов
                                            </template>
                                            <template #option>
                                                <div class="">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>
                                            <template #selected-option>
                                                <div class="selected">
                                                    {{ option.name_full }}
                                                </div>
                                            </template>

                                            <template #list-footer>
                                                <li class="pagination">
                                                    <button :disabled="page4 == 1" @click.prevent="getPrevOrganizationList()">Предыдущее</button>
                                                    <button :disabled="page4 == pageCount4" @click.prevent="getNextOrganizationList()">Следующее</button>
                                                </li>
                                            </template>
                                        </v-select>
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('line')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('longitude')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="modal__block_footer">
                            <!-- <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                            <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button> -->
                            <button class="modal__block_btn_primary ml-4" @click="goBack()">
                                <img src="../../assets/icons/arrow-right.svg" class="mr-2 rotate_180deg"/>
                                <span class="mr-2">{{$t('back')}}</span>
                            </button>

                            <button class="modal__block_btn_primary ml-4" @click="goFurther()">
                                <span class="ml-2">{{$t('further')}}</span>
                                <img src="../../assets/icons/arrow-right.svg" class="ml-2"/>
                            </button>
                        </div>

                    </div>








                    <div v-else-if="organizationModalSteps == 3" class="modal__block">


                        <span class="modal__block_subtitle">{{$t('service_area')}}</span>

                        <div class="modal__block_form">
                                <div class="w-100">
                                    <div class="d-flex align-center" v-for="(item, index) in regionServiceInputs" :key="index">
                                        <div class="form-group w-75">
                                            <label>{{$t('region')}}</label>
                                            <v-select :reduce="elem => elem.id" label="name" 
                                            v-model="organizationAdd.institution_code" :searchable="true"
                                            :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                            class="form-control mb-3">
                                                <template #no-options>
                                                    Нет результатов
                                                </template>
                                                <template #option>
                                                    <div class="">
                                                        {{ option.name_full }}
                                                    </div>
                                                </template>
                                                <template #selected-option>
                                                    <div class="selected">
                                                        {{ option.name_full }}
                                                    </div>
                                                </template>

                                                <template #list-footer>
                                                    <li class="pagination">
                                                        <button :disabled="page4 == 1" @click.prevent="getPrevOrganizationList()">Предыдущее</button>
                                                        <button :disabled="page4 == pageCount4" @click.prevent="getNextOrganizationList()">Следующее</button>
                                                    </li>
                                                </template>
                                            </v-select>
                                        </div>
                                        <button class="modal__block_btn_primary align-self-center bg-success" style="margin-left: 10px;" v-if="index == 0" @click="addRegionServiceInput()">
                                            <img src="../../assets/icons/Plus.svg"/>
                                            <span class="ml-2">{{$t('add')}}</span>
                                        </button>
                                        <div class="modal__block_form_delete_btn" v-if="index != 0" @click="removeRegionServiceInput(index)">
                                            <img src="../../assets/icons/Delete.svg" class="" style="width: 25px;"/>
                                        </div>
                                    </div>

                                </div>
                                
                                

                        </div>

                        <div class="modal__block_footer">
                            <!-- <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                            <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button> -->
                            <button class="modal__block_btn_primary ml-4" @click="goBack()">
                                <img src="../../assets/icons/arrow-right.svg" class="mr-2 rotate_180deg"/>
                                <span class="mr-2">{{$t('back')}}</span>
                            </button>

                            <button class="modal__block_btn_primary ml-4" @click="goFurther()">
                                <span class="ml-2">{{$t('further')}}</span>
                                <img src="../../assets/icons/arrow-right.svg" class="ml-2"/>
                            </button>
                        </div>


                    </div>









                    <div v-else-if="organizationModalSteps == 4" class="modal__block">


                        <span class="modal__block_subtitle">{{$t('contact_points')}}</span>

                        <div class="modal__block_form">
                                <div class="w-100">

                                    <div class="d-flex align-center" v-for="(item, index) in phoneContactInputs" :key="index">
                                      <div class="form-group w-75">
                                          <label>{{$t('phone')}}</label>
                                          <input type="text" class="form-control" v-model="organizationAdd">
                                      </div>
                                      <button class="modal__block_btn_primary align-self-center bg-success" style="margin: 10px 0 0 10px;" v-if="index == 0" @click="addPhoneContactInput()">
                                          <img src="../../assets/icons/Plus.svg"/>
                                          <span class="ml-2">{{$t('add')}}</span>
                                      </button>
                                      <div class="modal__block_form_delete_btn mt-3" v-if="index != 0" @click="removePhoneContactInput(index)">
                                          <img src="../../assets/icons/Delete.svg" class="" style="width: 25px;"/>
                                      </div>
                                    </div>

                                    <div class="d-flex align-center" v-for="(item, index) in emailContactInputs" :key="index">
                                        <div class="form-group w-75">
                                            <label>{{$t('Email')}}</label>
                                            <input type="text" class="form-control" v-model="organizationAdd">
                                        </div>
                                        <button class="modal__block_btn_primary align-self-center bg-success" style="margin: 10px 0 0 10px;" v-if="index == 0" @click="addEmailContactInput()">
                                            <img src="../../assets/icons/Plus.svg"/>
                                            <span class="ml-2">{{$t('add')}}</span>
                                        </button>
                                        <div class="modal__block_form_delete_btn mt-3" v-if="index != 0" @click="removeEmailContactInput(index)">
                                            <img src="../../assets/icons/Delete.svg" class="" style="width: 25px;"/>
                                        </div>
                                    </div>


                                    <div class="d-flex align-center" v-for="(item, index) in regionServiceInputs" :key="index">
                                        <div class="form-group w-75">
                                            <label>{{$t('url')}}</label>
                                            <v-select :reduce="elem => elem.id" label="name" 
                                            v-model="organizationAdd.institution_code" :searchable="true"
                                            :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                            class="form-control mb-3">
                                                <template #no-options>
                                                    Нет результатов
                                                </template>
                                                <template #option>
                                                    <div class="">
                                                        {{ option.name_full }}
                                                    </div>
                                                </template>
                                                <template #selected-option>
                                                    <div class="selected">
                                                        {{ option.name_full }}
                                                    </div>
                                                </template>
                                                <template #list-footer>
                                                    <li class="pagination">
                                                        <button :disabled="page4 == 1" @click.prevent="getPrevOrganizationList()">Предыдущее</button>
                                                        <button :disabled="page4 == pageCount4" @click.prevent="getNextOrganizationList()">Следующее</button>
                                                    </li>
                                                </template>
                                            </v-select>
                                        </div>
                                        <button class="modal__block_btn_primary align-self-center bg-success" style="margin: 0 0 4px 10px;" v-if="index == 0" @click="addRegionServiceInput()">
                                            <img src="../../assets/icons/Plus.svg"/>
                                            <span class="ml-2">{{$t('add')}}</span>
                                        </button>
                                        <div class="modal__block_form_delete_btn" v-if="index != 0" @click="removeRegionServiceInput(index)">
                                            <img src="../../assets/icons/Delete.svg" class="" style="width: 25px;"/>
                                        </div>
                                    </div>

                                </div>
                                
                                

                        </div>

                        <div class="modal__block_footer">
                            <!-- <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                            <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button> -->
                            <button class="modal__block_btn_primary ml-4" @click="goBack()">
                                <img src="../../assets/icons/arrow-right.svg" class="mr-2 rotate_180deg"/>
                                <span class="mr-2">{{$t('back')}}</span>
                            </button>

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
import { mainStore } from '../../stores/main';
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
        const mainStorage = mainStore();
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
          await mainStorage.GET_ORGGANIZATIONS();
        })





        async function saveOrganizationData(){
          // await mainStorage.GET_ORGGANIZATIONS();
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
.modal-active{
    display: block;
}
</style>