<template>
<div>
    <div class="d-flex justify-space-between mb-4">
        <h1 class="text-dark fz-18rem">{{$t('add_organization')}}</h1>
    </div>
    <div  id="by-type-region">
        <div id="by-type">

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#organization__main_data">{{$t('main_data')}}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#organization__address">{{$t('the_address')}}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#organization__contacts">{{$t('contact_points')}}</a>
                </li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane fade in active show" id="organization__main_data">

                    
                    <div class="d-flex">
                        <div class="card col-6 mr-3">
                            <div class="">
                                <h4>{{$t('main_data')}}</h4>
                            </div>
                            <div class="">
                                <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3"
                                    :placeholder="$t('pin')" v-model="filterBasic.pinfl">

                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control mb-3" :placeholder="$t('parent')">
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


                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control mb-3" :placeholder="$t('type')">
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


                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control mb-3" :placeholder="$t('level')">
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








                            <div class="">

                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control mb-3" :placeholder="$t('service_type')">
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



                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control mb-3" :placeholder="$t('kopf')">
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




                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control mb-3" :placeholder="$t('dep_affiliation')">
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




                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control mb-3" :placeholder="$t('identification_code')">
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


                    
                    
                        <div class="card ml-3">
                            <div class="">
                                <h4>{{$t('name')}}</h4>
                            </div>


                            <div class="d-flex">
                                <div class="col-4">
                                    <label for="">O'zbekcha</label>

                                    <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3" 
                                        :placeholder="$t('name_short')" v-model="filterBasic.pinfl">

                                    <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3"
                                        :placeholder="$t('name_full')" v-model="filterBasic.pinfl">
                                </div>


                                <div class="col-4">
                                    <label for="">Узбекча</label>

                                    <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3" 
                                        :placeholder="$t('name_short')" v-model="filterBasic.pinfl">

                                    <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3"
                                        :placeholder="$t('name_full')" v-model="filterBasic.pinfl">
                                </div>



                                <div class="col-4">
                                    <label for="">Русский</label>

                                    <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3" 
                                        :placeholder="$t('name_short')" v-model="filterBasic.pinfl">

                                    <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3"
                                        :placeholder="$t('name_full')" v-model="filterBasic.pinfl">
                                </div>

                                
                            </div>
                        </div>

                    </div>



                </div>
                <div class="tab-pane fade in" id="organization__address">
                    <div class="col-12 mt-4">
                        <h4>{{$t('the_address')}}</h4>
                    </div>
                    <div class="d-flex">
                        <div class="col-6">
                            <v-select :reduce="elem => elem.id" label="name_full" 
                            v-model="filterBasic.organization_id" :searchable="true"
                            :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                            class="form-control mb-3" :placeholder="$t('parent')">
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


                            <v-select :reduce="elem => elem.id" label="name_full" 
                            v-model="filterBasic.organization_id" :searchable="true"
                            :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                            class="form-control mb-3" :placeholder="$t('type')">
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


                            <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3" 
                                :placeholder="$t('name_short')" v-model="filterBasic.pinfl">

                            <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3"
                                :placeholder="$t('name_full')" v-model="filterBasic.pinfl">


                          
                        </div>








                        <div class="col-6">

                            <v-select :reduce="elem => elem.id" label="name_full" 
                            v-model="filterBasic.organization_id" :searchable="true"
                            :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                            class="form-control mb-3" :placeholder="$t('service_type')">
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



                            <v-select :reduce="elem => elem.id" label="name_full" 
                            v-model="filterBasic.organization_id" :searchable="true"
                            :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                            class="form-control mb-3" :placeholder="$t('kopf')">
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



                            <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3" 
                                :placeholder="$t('name_short')" v-model="filterBasic.pinfl">

                            <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3"
                                :placeholder="$t('name_full')" v-model="filterBasic.pinfl">




                            
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade in" id="organization__contacts">
                        <div class="col-12 mt-4">
                            <h4>{{$t('contact_points')}}</h4>
                        </div>

                        <div class="d-flex">
                            <div class="col-6">
                                <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3" 
                                    :placeholder="$t('phone')" v-model="filterBasic.pinfl">

                                <input type="tel" data-inputmask-mask="99999999999999" class="form-control mb-3"
                                    :placeholder="$t('email')" v-model="filterBasic.pinfl">
                            </div>
                        </div>
                       
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref, reactive, } from 'vue';

export default {
    setup(props) {
        let filterBasic = reactive({
            pinfl: '',
            organization_id: ''
        });


        return {
            filterBasic
        }
    }
}
</script>

<style>
 .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25) !important;
    display: table;
    transition: opacity 0.3s ease;
    overflow-y: scroll;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    max-width: 800px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    border-radius: 1rem;

}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.add,
.remove {
    display: flex;
    align-items: center;
}

.tree-node-text:hover {
    color: #101e31;
    cursor: pointer;

}

#modal-form .btn:first-child {
    margin-right: 0.5rem;
}



@media (min-width:576)and (max-width:768) {
    .modal-container {
        width: 500px !important;
    }
}

@media(min-width:769) and (max-width:1024) {
    .modal-container {
        width: 700px !important;
    }
}

@media(min-width:1024) {
    .modal-container {
        width: 900px !important;
    }
}

</style>