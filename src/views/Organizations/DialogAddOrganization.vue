<template>
<div class="modal fade" id="addOrganizationModal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
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
                    <span class="modal__block_title">Добавить организации</span>

                    <div v-if="organizationModalSteps == 0" class="modal__block">


                        <span class="modal__block_subtitle">{{$t('main_data')}}</span>

                        <div class="modal__block_form">
                            <div class="modal__block_form_left">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('inn')}}</label>
                                        <input type="text" class="form-control" v-model="organizationAdd.inn">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('parent')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.top_level" :searchable="true"
                                        :filterable="false" :options="parentList"
                                        class="form-control mb-3">
                                         <!-- @search="onOrganizationsSearch"  -->
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
                                        <label>{{$t('type')}}</label>
                                          <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.organization_type" :searchable="true"
                                        :filterable="false" :options="typeList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                                        <label>{{$t('level')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.scale_of_med_services" :searchable="true"
                                        :filterable="false" :options="levelList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                            </div>

                            <div class="modal__block_form_right">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('service_type')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.med_service_type" :searchable="true"
                                        :filterable="false" :options="serviceTypeList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                                        <label>{{$t('kopf')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.government_body" :searchable="true"
                                        :filterable="false" :options="kopfList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                                        <label>{{$t('dep_affiliation')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="dep_affiliationList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                                        <label>{{$t('identification_code')}}</label>
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


                        <span class="modal__block_subtitle">{{$t('names_of_organization')}}</span>

                        <div class="modal__block_form">
                        <!-- <div class="d-flex align-center flex-direction-column justify-space-between h-100">
                          <div class="mt-5">O'zbekcha</div>
                          <div class="mt-5">O'zbekcha</div>
                        </div> -->
                            <div class="modal__block_form_left">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('name_short')}} (O'zbekcha)</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('name_short')}} (Ўзбекча)</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('name_short')}} (Русский)</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                            </div>

                            <div class="modal__block_form_right">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('name_full')}} (O'zbekcha)</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('name_full')}} (Ўзбекча)</label>
                                        <input type="text" class="form-control" v-model="organizationAdd">
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('name_full')}} (Русский)</label>
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


                        
                        <span class="modal__block_subtitle">{{$t('the_address')}}</span>

                        <div class="modal__block_form">
                            <div class="modal__block_form_left">
                                <div class="w-100">
                                    <div class="form-group">
                                        <label>{{$t('country')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="countryList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                                        <label>{{$t('city')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="cityList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                                        <label>{{$t('region')}}</label>
                                        <v-select :reduce="elem => elem.id" label="name" 
                                        v-model="organizationAdd.institution_code" :searchable="true"
                                        :filterable="false" :options="regionList"
                                        class="form-control mb-3">
                                         <!-- @search="onOrganizationsSearch"  -->
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
                                        :filterable="false" :options="neighborhoodList" 
                                        class="form-control mb-3">
                                        <!-- @search="onOrganizationsSearch"  -->
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
                                            <label>{{$t('service_area')}}</label>
                                            <v-select :reduce="elem => elem.id" label="name" 
                                            v-model="organizationAdd.institution_code" :searchable="true"
                                            :filterable="false" :options="serviceAreaList" 
                                            class="form-control mb-3">
                                            <!-- @search="onOrganizationsSearch"  -->
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
                                            :filterable="false" :options="urlList"
                                            class="form-control mb-3">
                                             <!-- @search="onOrganizationsSearch"  -->
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