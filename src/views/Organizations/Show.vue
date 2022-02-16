<template>
<div class="row mb-3">
    <h1 class="text-dark mx-2 px-2 fz-18rem">{{$t('organizations')}}</h1>
    <!-- @if(Auth::user()->hasPermissionTo('organizations_create')) -->
    <a href="{{route('organizations.create')}}" class="btn btn-primary text-nowrap d-flex align-center">
        <i class="fas fa-plus mr-2 fz-12px"></i> {{$t('add_organization')}}
    </a>
    <!-- @endif -->
    
    <a href="{{route('exportToExcel')}}" class="btn btn-success text-nowrap ml-auto d-flex align-center" style="margin-right: 10px;">
        <i class="fa fa-file-alt mr-2 fz-12px"></i> {{$t('export.excel')}}
    </a>
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
                <a class="nav-link" data-toggle="tab" href="#organization__contacts">{{$t('contacts')}}</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade in active show" id="organization__main_data">
                <div class="row">
                    <div class="col-lg-6">
                        <div>
                                <!-- <table class="table table-bordered table-hover">
                                    <tbody>
                                        {{-- <tr> --}}
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
                                        {{-- </tr> --}}
                                        <tr>
                                            <th class="w-50">{{$t('inn')}}</th>
                                            <td>{{ $organization->tin }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('parent')}}</th>
                                            <td>{{ $organization->parent->name_full ?? '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('type')}}</th>
                                            <td>{{ $organization->type->name ?? '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('level')}}</th>
                                            <td>{{ $organization->level->name ?? '' }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('service_type')}}</th>
                                            <td class="d-flex flex-wrap">
                                            @foreach ($organization->serviceTypes as $sType)
                                            <span class="m-1">{{$sType->name ?$sType->name.($loop->last?'':', ') :'' }}</span>
                                            @endforeach
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('kopf')}}</th>
                                            <td>{{ $organization->kopf?$organization->kopf->name:"" }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('dep_affiliation')}}</th>
                                            <td>{{ $organization->governmentalRelation?$organization->governmentalRelation->name:"" }}</td>
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('identification_code')}}</th>
                                            <td>{{$organization->identification_code}}</td>
                                        </tr>
                                    </tbody>
                                </table> -->
                        </div>
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>{{$t('locale')}}</th>
                                    <th>{{$t('name_short')}}</th>
                                    <th>{{$t('name_full')}}</th>
                                </tr>
                            </thead>
                            <tbody>
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
                    <div class="col-lg-6">

                        <!-- @foreach ($organization->telecoms as $telecom)
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    @if($telecom->contactSystem->label=='phone')
                                    <tr>
                                        <th class="w-50">{{$t('phone')}}&nbsp;({{$telecom->contactUse->name}})</th>
                                        <td>{{$telecom->value ?? ''}}</td>
                                    </tr>
                                    @endif
                                    @if($telecom->contactSystem->label=='email')
                                    <tr>
                                        <th class="w-50">{{$t('email')}}&nbsp;({{$telecom->contactUse->name}})</th>
                                        <td>{{$telecom->value ?? ''}}</td>
                                    </tr>
                                    @endif
                                    @if($telecom->contactSystem->label=='sms')
                                    <tr>
                                        <th class="w-50">{{$t('sms')}}&nbsp;({{$telecom->contactUse->name}})</th>
                                        <td>{{ $telecom->value }}</td>
                                    </tr>
                                    @endif
                                    @if($telecom->contactSystem->label=='url')
                                    <tr>
                                        <th class="w-50">{{$t('url')}}&nbsp;({{$telecom->contactUse->name}})</th>
                                        <td>{{ $telecom->value }}</td>
                                    </tr>
                                    @endif
                                </tbody>
                            </table>
                        @endforeach -->


                    
                        <!-- @foreach ($organization->addresses as $address)
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th class="w-50">{{$t('use')}}</th>
                                        <td>{{ $address->addressUse->name ?? '' }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('country')}}</th>
                                        <td>{{ $address->country->name ?? '' }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('state')}}</th>
                                        <td>{{ $address->state->name ?? '' }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('city')}}</th>
                                        <td>{{ $address->city->name ?? '' }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('district')}}</th>
                                        <td>{{ $address->district->name ?? '' }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('postal_code')}}</th>
                                        <td>{{ $address->postal_code }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('line')}}</th>
                                        <td>{{ $address->line }}</td>
                                    </tr>
                                    {{-- <tr>
                                        <th class="w-50">{{$t('start_date')}}</th>
                                        <td>{{ $address->start_date ? $address->start_date->format('Y-m-d') : '' }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('end_date')}}</th>
                                        <td>{{ $address->end_date ? $address->end_date->format('Y-m-d') : '' }}</td>
                                    </tr> --}}
                                    <tr>
                                        <th class="w-50">{{$t('latitude')}}</th>
                                        <td>{{ $address->latitude }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('longitude')}}</th>
                                        <td>{{ $address->longitude }}</td>
                                    </tr>
                                    <tr>
                                        <th class="w-50">{{$t('altitude')}}</th>
                                        <td>{{ $address->altitude }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        @endforeach -->
                        <div class="card">
                            <div class="card-header">
                                <h4>{{$t('service_area')}}</h4>
                            </div>
                            <div class="card-body">
                                <!-- @foreach ($organization->serviceAreas as $area)
                                    <table class="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th class="w-50">{{$t('state')}}</th>
                                                <td>{{ $area->state->name ?? '' }}</td>
                                            </tr>
                                            {{-- <tr>
                                                <th class="w-50">{{$t('city')}}</th>
                                                <td>{{ $area->city->name ?? '' }}</td>
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('district')}}</th>
                                                <td>{{ $area->district->name ?? '' }}</td>
                                            </tr> --}}

                                        </tbody>
                                    </table>
                                @endforeach -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade in" id="organization__address">
                <div>
                    dsdsddsd
                </div>
            </div>
            <div class="tab-pane fade in" id="organization__contacts">
                <div id="leave">
                  ddd

                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {

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