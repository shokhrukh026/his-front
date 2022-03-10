<template>
<div>
    <div class="d-flex justify-space-between mb-4">
        <div class="d-flex">
            <h1 class="text-dark fz-18rem">{{$t('organizations')}}</h1>
            <!-- @if(Auth::user()->hasPermissionTo('organizations_create')) -->
            <a href="{{route('organizations.create')}}" class="btn btn-primary text-nowrap ml-3">
                <i class="fas fa-plus mr-2 fz-12px"></i> {{$t('add_organization')}}
            </a>
            <!-- @endif -->
        </div>
        
        <div class="d-flex">
            <a href="{{route('exportToExcel')}}" class="btn btn-success text-nowrap">
                <i class="fas fa-sitemap mr-2 fz-12px"></i> {{$t('organizational_structure')}}
            </a>
            <a href="{{route('exportToExcel')}}" class="btn btn-warning text-nowrap ml-3">
                <i class="fas fa-edit mr-2 fz-12px text-white"></i> 
                <span class="text-white">{{$t('edit')}}</span>
            </a>
        </div>
    </div>
    <div class="card" id="by-type-region">
        <div class="card-body" id="by-type">

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
                    <div class="mt-3">
                        <div>
                            <h4>{{$t('main_data')}}</h4>
                        </div>

                        <div class="user__info_right_table mt-3">
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    <!-- {{-- <tr> --}}
                                    {{-- <th class="w-50">ID</th> --}}
                                    {{-- <td>{{$organization->id}}</td> --}}
                                    {{-- </tr> --}}
                                    {{-- <tr> --}}
                                    {{-- <th class="w-50">CORE ID</th> --}}
                                    {{-- <td>{{$organization->core_id}}</td> --}}
                                    {{-- </tr> --}}
                                    {{-- <tr> --}}
                                    {{-- <th class="w-50">SEMANTIC ID</th> --}}
                                    {{-- <td>{{$organization->core_id}}</td> --}}
                                    {{-- </tr> --}}
                                    {{-- <tr> --}}
                                    {{-- <th class="w-50">GLOBAL ID</th> --}}
                                    {{-- <td>{{$organization->core_id}}</td> --}}
                                    {{-- </tr> --}} -->
                                    <tr>
                                        <th class="w-50">{{$t('inn')}}</th>
                                        <td>{{ organizationData.data }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('parent')}}</th>
                                        <!-- <td>{{ $organization->parent->name_full ?? '' }}</td> -->
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('type')}}</th>
                                        <!-- <td>{{ $organization->type->name ?? '' }}</td> -->
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('level')}}</th>
                                        <!-- <td>{{ $organization->level->name ?? '' }}</td> -->
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('service_type')}}</th>
                                        <!-- <td class="d-flex flex-wrap">
                                            @foreach ($organization->serviceTypes as $sType)
                                            <span class="m-1">{{$sType->name ?$sType->name.($loop->last?'':', ') :'' }}</span>
                                            @endforeach
                                        </td> -->
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('kopf')}}</th>
                                        <!-- <td>{{ $organization->kopf?$organization->kopf->name:"" }}</td> -->
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('dep_affiliation')}}</th>
                                        <!-- <td>{{ $organization->governmentalRelation?$organization->governmentalRelation->name:"" }}</td> -->
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('identification_code')}}</th>
                                        <!-- <td>{{$organization->identification_code}}</td> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class=" mt-3">
                        <div>
                            <h4>{{$t('name')}}</h4>
                        </div>

                        <div class="user__info_right_table mt-3">
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th>{{$t('locale')}}</th>
                                    </tr>
                                    <tr>
                                        <th>{{$t('name_full')}}</th>
                                    </tr>
                                    <tr>
                                        <th>{{$t('name_short')}}</th>
                                    </tr>
                                    <!-- @foreach ($organization->translations as $translation)
                                        <tr>
                                            <td>{{ $locales[$translation->locale] ?? '' }}</td>
                                            <td>{{ $translation->name_short }}</td>
                                            <td>{{ $translation->name_full }}</td>
                                        </tr>
                                    @endforeach -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class=" mt-3">
                        <div>
                            <h4>{{$t('service_area')}}</h4>
                        </div>

                        <div class="user__info_right_table mt-3">
                        <!-- @foreach ($organization->serviceAreas as $area) -->
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th class="w-50">{{$t('state')}}</th>
                                        <!-- <td>{{ $area->state->name ?? '' }}</td> -->
                                    </tr>
                                    <!-- {{-- <tr>
                                        <th class="w-50">{{$t('city')}}</th>
                                        <td>{{ $area->city->name ?? '' }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('district')}}</th>
                                        <td>{{ $area->district->name ?? '' }}</td>
                                    </tr> --}} -->

                                </tbody>
                            </table>
                        <!-- @endforeach -->
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade in" id="organization__address">
                    <div class="mt-3" v-for="(item, index) in organizationData.data.addresses" :key="index">
                        <div>
                            <h4>{{$t('the_address')}}</h4>
                        </div>

                        <div class="user__info_right_table mt-3">
                            <!-- @foreach ($organization->addresses as $address) -->
                                <table class="table table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <th class="w-50">{{$t('use')}}</th>
                                            <!-- <td>{{ item.use }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('country')}}</th>
                                            <td>{{ item.country.uz }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('state')}}</th>
                                            <td>{{ item.state ? item.state : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('city')}}</th>
                                            <td>{{ item.city ? item.city : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('district')}}</th>
                                            <td>{{ item.district ? item.district : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('postal_code')}}</th>
                                            <td>{{ item.postal_code ? item.postal_code : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('line')}}</th>
                                            <td>{{ item.line ? item.line : '' }}</td>
                                        </tr>
                                        <!-- {{-- <tr>
                                            <th class="w-50">{{$t('start_date')}}</th>
                                            <td>{{ $address->start_date ? $address->start_date->format('Y-m-d') : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('end_date')}}</th>
                                            <td>{{ $address->end_date ? $address->end_date->format('Y-m-d') : '' }}</td>
                                        </tr> --}} -->
                                        <tr>
                                            <th class="w-50">{{$t('latitude')}}</th>
                                            <td>{{ item.latitude ? item.latitude : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('longitude')}}</th>
                                            <td>{{ item.longitude ? item.longitude : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('altitude')}}</th>
                                            <td>{{ item.line ? item.line : '' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            <!-- @endforeach -->
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade in" id="organization__contacts">
                    <div class="mt-3">
                        <div>
                            <h4>{{$t('contact_points')}}</h4>
                        </div>

                        <div class="user__info_right_table mt-3">
                        <!-- @foreach ($organization->telecoms as $telecom) -->
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    <!-- @if($telecom->contactSystem->label=='phone') -->
                                    <tr>
                                        <th class="w-50">{{$t('phone')}}&nbsp;
                                            <!-- ({{$telecom->contactUse->name}}) -->
                                        </th>
                                        <!-- <td>{{$telecom->value ?? ''}}</td> -->
                                    </tr>
                                    <!-- @endif -->
                                    <!-- @if($telecom->contactSystem->label=='email') -->
                                    <tr>
                                        <th class="w-50">{{$t('email')}}&nbsp;
                                            <!-- ({{$telecom->contactUse->name}}) -->
                                        </th>
                                        <!-- <td>{{$telecom->value ?? ''}}</td> -->
                                    </tr>
                                    <!-- @endif -->
                                    <!-- @if($telecom->contactSystem->label=='sms') -->
                                    <tr>
                                        <th class="w-50">{{$t('sms')}}&nbsp;
                                            <!-- ({{$telecom->contactUse->name}}) -->
                                        </th>
                                        <!-- <td>{{ $telecom->value }}</td> -->
                                    </tr>
                                    <!-- @endif -->
                                    <!-- @if($telecom->contactSystem->label=='url') -->
                                    <tr>
                                        <th class="w-50">{{$t('url')}}&nbsp;
                                            <!-- ({{$telecom->contactUse->name}}) -->
                                        </th>
                                        <!-- <td>{{ $telecom->value }}</td> -->
                                    </tr>
                                    <!-- @endif -->
                                </tbody>
                            </table>
                        <!-- @endforeach -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref, reactive, onMounted, watch, toRefs } from "vue";
import { storeToRefs } from 'pinia';
import dialogAddOrg from './DialogAddOrganization.vue';
import dialogDeleteOrg from './DialogDeleteOrganization.vue';
import { organizationsStore } from '../../stores/organizations';
import { useRoute } from 'vue-router';

export default {
    components: {
        dialogAddOrg,
        dialogDeleteOrg,
    },
    setup(){
        const route = useRoute();
        const organizationsStorage = organizationsStore();
        // let showModal = ref(false);
        const { organizationData } = storeToRefs(organizationsStorage) //REACTIVE
        let page = ref(1)

        watch(page, async (currentValue, oldValue) => {
            await organizationsStorage.GET_ORGANIZATION_SHOW_BY_ID(currentValue, route.params.id);
        })
        onMounted(async() => {
            await organizationsStorage.GET_ORGANIZATION_SHOW_BY_ID(page.value, route.params.id);
        })

        return{
            organizationsStorage, organizationData, 
            page,
        }
    },

    methods: {
        openOrganizationAddModal(){
            $('#addOrganizationModal').modal('toggle');
        },
        openOrganizationDeleteModal(){
            $('#deleteOrganizationModal').modal('toggle');
        },
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