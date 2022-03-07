<template>
<div class="organization__container">
    <div class="organization__container_header mb-4">
        <div class="d-flex">
            <h1 class="text-dark fz-18rem">{{$t('organizations')}}</h1>
            <!-- @if(Auth::user()->hasPermissionTo('organizations_create')) -->
            <a @click="openOrganizationAddModal()" class="btn btn-primary text-nowrap ml-3">
                <i class="fas fa-plus mr-2 fz-12px"></i> {{$t('add_organization')}}
            </a>

            <!-- <router-link tag="a" to="/organizations/create" class="btn btn-primary text-nowrap ml-3">
                <i class="fas fa-plus mr-2 fz-12px"></i> {{$t('add_organization')}}
            </router-link> -->
            <!-- @endif -->
        </div>
        
        <div class="d-flex">
            <a href="{{route('exportToExcel')}}" class="btn btn-success text-nowrap ml-3">
                <i class="fa fa-file-alt mr-2 fz-12px"></i> {{$t('export_excel')}}
            </a>
        </div>
    </div>
    <div class="row">
        <form action="?" class="col-12 mb-2">

            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="state_id" class="form-control select2-term" style="width:100%" id="state">
                            <option value="">{{$t('state')}}</option>
                            <!-- @foreach($states as $state)
                            <option value="{{$state->id}}" @if(request('state_id')==$state->id) selected @endif>{{$state->name}}</option>
                            @endforeach -->
                        </select>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="city_id" class="form-control" style="width:100%" id="city">
                            <option value="">{{$t('city')}}</option>
                            <!-- @if($city = City::find(request('city_id')))
                                <option value="{{$city->id}}" selected>{{$city->name}}</option>
                            @endif -->
                        </select>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="organization_id" class="form-control " style="width:100%" id="organization">
                            <option value="">{{$t('name_full')}}</option>
                            <!-- @if($organization=Organization::find(request('organization_id')))
                                <option value="{{$organization->id}}" selected>{{$organization->name_full}}</option>
                            @endif -->
                        </select>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="parent_id" class="form-control" style="width:100%" id="parent_organization">
                            <option value="">{{$t('parent_organization')}}</option>
                            <!-- @if($parent_organization=Organization::find(request('parent_id')))
                                <option value="{{$parent_organization->id}}" selected>{{$parent_organization->name_full}}</option>
                            @endif -->
                        </select>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 d-flex align-items-center">
                    <div class="form-group">
                        <div class="custom-control custom-switch" >
                            <!-- <input type="checkbox" class="custom-control-input" {{request('with_all_subdivisions') ? 'checked' : ''}}  id="with_all_subdivisions" name="with_all_subdivisions"> -->
                            <label class="custom-control-label small"
                                for="with_all_subdivisions">{{$t('with_all_subdivisions')}}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="type_id" class="form-control select2-term" style="width:100%" id="type_id">
                            <option value="">{{$t('type')}}</option>
                            <!-- @foreach($types as $type)
                            <option value="{{$type->id}}" @if(request('type_id')==$type->id) selected @endif>{{$type->name}}</option>
                            @endforeach -->
                        </select>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="level_id" class="form-control select2-term" style="width:100%" id="level_id">
                            <option value="">{{$t('level')}}</option>
                            <!-- @foreach($levels as $level)
                            <option value="{{$level->id}}" @if(request('level_id')==$level->id) selected @endif>{{$level->name}}</option>
                            @endforeach -->
                        </select>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="service_type_id" class="form-control select2-term" style="width:100%" id="service_type_id">
                            <option value="">{{$t('service_type')}}</option>
                            <!-- @foreach($service_types as $sType)
                            <option value="{{$sType->id}}" @if(request('service_type_id')==$sType->id) selected @endif>{{$sType->name}}</option>
                            @endforeach -->
                        </select>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <input type="text" name="identification_code" class="form-control" style="width:100%" id="identification_code" value="{{request('identification_code')}}" data-inputmask-mask="A[A][9]9999" placeholder="{{$t('identification_code')}}"/>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <select name="legal_type" class="form-control select2-term" style="width:100%" id="legal_type">
                            <option value="" >{{$t('legal_type')}}</option>
                            <!-- @foreach($legalTypes as $type)
                            <option value="{{$type}}" @if(request('legal_type')==$type) selected @endif>{{$t('legal_types.'.$type)</option>
                            @endforeach -->
                        </select>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="form-group">
                        <input type="text" data-inputmask-mask="999999999" name="inn" class="form-control" placeholder="{{$t('inn')}}">
                    </div>
                </div>

                <div class="col-3 mb-2">
                    <button type="submit" class="btn btn-primary d-flex align-center">
                        <i class="fa fa-filter mr-2 fz-12px"></i>
                        {{$t('filter')}} 
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="row">
        <div class="col-12"  id="delete-modal">
            <div class="delete-modal">
                <!-- <modal v-if="showDeleteAlertModal"
                    @close="showDeleteAlertModal=false">
                    <form id="modal-form" slot="modal-container"
                        method="POST" :action="url">
                        @method('DELETE')
                        @csrf
                        <div class="" slot="header">
                            <h4 class="modal-title mb-4">
                                {{$t('delete_organization')}}
                            </h4>
                        </div>

                        <div class="" slot="body">
                            <div>
                                <p>
                                    {{$t('do_you_really_want_to_delete_questionless')}} <span class="font-weight-bold">@{{organization.name_full}}</span>
                                </p>
                            </div>
                        </div>

                        <div class="d-flex justify-content-end" slot="footer">
                            <button type="button" class="btn btn-light"
                                v-on:click="showDeleteAlertModal=false">{{$t('cancel')}}</button>
                            <button type="submit"
                                class="btn btn-danger">{{$t('delete')}}</button>
                        </div>
                    </form>
                </modal> -->
            </div>
            <!-- {{organizationsStorage.organizationsList}} -->
            <div class="card">
                <div class="table-responsive">
                    <table class="table table-striped table-sm mb-0">
                        <thead>
                            <tr role="row">
                                <th class="py-2">
                                    {{$t('identification_code')}}
                                </th>
                                <th class="py-2">
                                    {{$t('name_full')}}
                                </th>
                                <th class="py-2">
                                    {{$t('parent_organization')}}
                                </th>
                                <th class="py-2">
                                    {{$t('type')}}
                                </th>
                                <th class="py-2">
                                    {{$t('level')}}
                                </th>
                                <th class="py-2">
                                    {{$t('service_type')}}
                                </th>
                                <th class="py-2" width="1">
                                    {{$t('action')}}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <!-- @foreach($organizations as $organization) -->
                            <tr v-for="(item, index) in organizationsList.data" :key="index">
                                <td>{{item.identification_code}}</td>
                                <td>{{item.full_name.uz}}</td>
                                <td>{{item.parent.uz}}</td>
                                <td>{{item.type.ru ? item.type.ru : ''}}</td>
                                <td>{{item.level.ru ? item.level.ru : ''}}</td>
                                <td>
                                    <template v-for="(item2, index2) in item.service_types" :key="index2">{{index2 > 0 ? ', ' + item2.uz.split(' ').join('')  : item2.uz.split(' ').join('') }}</template>
                                </td>
                                <!-- <td class="pl-3 d-flex flex-wrap">
                                    @foreach ($organization->serviceTypes as $sType)
                                    <span class="m-1">{{$sType->name ?$sType->name.($loop->last?'':', ') :'' }}</span>
                                    @endforeach
                                </td> -->


                                <td class="pr-3">
                                    <div class="d-flex">
                                        <!-- @if(auth()->user()->hasPermissionTo('organizations_view')) -->
                                            <router-link class="btn btn-sm bg-success d-flex align-center"
                                                :to="{name: 'organizations-show', params: {id: item.id}}">
                                                <i class="fas fa-eye text-white"></i>
                                            </router-link>
                                        <!-- @endif -->
                                        <!-- @if(auth()->user()->hasPermissionTo('organizations_edit')) -->
                                            <router-link class="btn btn-sm bg-warning d-flex align-center ml-2"
                                                :to="{name: 'organizations-show', params: {id: item.id}}">
                                                <i class="fas fa-pencil-alt text-white"></i>
                                            </router-link>
                                            <!-- <router-link class="btn btn-sm bg-info ml-2 d-flex align-center"
                                                to="{{route('organizations.edit', $organization)}}">
                                                <i class="fas fa-pencil-alt"></i>
                                            </router-link> -->
                                        <!-- @endif -->
                                        <!-- @if(auth()->user()->hasPermissionTo('organizations_delete')) -->
                                            <router-link class="btn btn-sm bg-danger d-flex align-center ml-2"
                                                :to="{name: 'organizations-show', params: {id: item.id}}">
                                                <i class="fas fa-trash-alt text-white"></i>
                                            </router-link>
                                        <!-- <router-link class="btn btn-sm bg-danger ml-2 d-flex align-center"
                                            to="javascript:void(0)" @click="getOrganization({{$organization}})">
                                            <i class="fas fa-trash-alt"></i>
                                        </router-link> -->
                                    <!-- @endif -->
                                    </div>
                                </td>

                            </tr>
                        <!-- @endforeach -->
                        </tbody>
                    </table>
                </div>
                <div class="pagination-wrapper row align-items-center justify-content-between mx-0 pt-2">
                    <!-- <div class="col-auto">{{organizationsList.per_page}}</div> -->
                     <v-pagination
                        v-model="page"
                        :pages="organizationsList.last_page"
                        :range-size="4"
                        active-color="#DCEDFF"
                    />
                        <!-- @update:modelValue="updateHandler" -->


                    <!-- <div class="col-auto mb-2 py-1 text-primary font-weight-bold">{{$t('total')}}: {{ number_format($organizations->total(), 0, '.', ' ') }}</div> -->
                </div>
            </div>
        </div>
    </div>

    <dialogAddOrg :showModal="showModal"></dialogAddOrg>
</div>



</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import { storeToRefs } from 'pinia';
import dialogAddOrg from './DialogAddOrganization.vue';
import { organizationsStore } from '../../stores/organizations';

export default {
    components: {
        dialogAddOrg,
    },
    setup(){
        let regionServiceInputs = ref([
            {id: 1}
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
        const organizationsStorage = organizationsStore();
        let showModal = ref(false);
        // const { count } = store //NOT REACTIVE
        const { organizationsList } = storeToRefs(organizationsStorage) //REACTIVE
        // console.log(count) // => 0
        // store.count++;
        // store.increment(2);

        let firstStep = ref(true);
        let secondStep = ref('');
        let organizationModalSteps = ref(0);
        // const loginToAccount = async () => {
        //     await authStorage.SIGN_IN({username: username.value, password: password.value})
        // };

        let state =  ref(false);
        let language = ref(1);
        let languageOptions = ref([
            {id: 1, title: 'UZ'},
            {id: 2, title: 'EN'},
            {id: 3, title: 'RU'},
        ]);
        let page = ref(1)

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


        watch(page, async (currentValue, oldValue) => {
            await organizationsStorage.GET_ORGANIZATIONS(currentValue);
        })

        onMounted(async() => {
            await organizationsStorage.GET_ORGANIZATIONS(page.value);
        })

        return{
            firstStep, secondStep, state, language, languageOptions, organizationsStorage, organizationsList,
            showModal, organizationModalSteps, regionServiceInputs, organizationAdd,

            page,

            addRegionServiceInput, removeRegionServiceInput
        }
    },

    methods: {
        confirm() {
            this.show = false;
        },
        cancel(close) {
            close();
        },
        openOrganizationAddModal(){
            $('#addOrganizationModal').modal('toggle');
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