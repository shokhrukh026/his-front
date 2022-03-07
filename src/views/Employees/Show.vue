<template>
<div class="d-flex justify-content-end">
        <h4 class="m-0 text-dark my-2">
            <!-- {{ $employee->OfficialFullName }} -->
        </h4>
    </div>
    <div class="d-flex justify-content-between">
        <a href="{{ url()->previous() }}" class="btn btn-primary">
            <i class="fas fa-angle-double-left mr-1"></i> {{$t('back')}}
        </a>

        <div id="actions" class="d-flex">

            <!-- @if (Auth::user()->hasPermissionTo('employees_edit')) -->

                <a href="{{ route('employees.edit', $employee) }}" class="btn btn-warning text-white">
                    <i class="fas fa-edit mr-1"></i> {{$t('edit')}}
                </a>
            <!-- @endif -->

            <button class="btn btn-primary ml-2" id="additional-actions-button">
                <i class="fas fa-plus mr-1" id="additional-actions-icon"></i> 
                <span>{{$t('additional_actions')}}</span>
            </button>
        </div>
    </div>
    <div id="additional-actions-panel">
        <div class="d-flex justify-content-start flex-wrap my-1">
            <a href="{{ route('employees.additional-information', $employee) }}" class="btn btn-outline-success mr-2 my-1">
                <i class="fas fa-users mr-1"></i> 
                <span>{{$t('additional_information')}}</span>
            </a>
            <a href="{{ route('employees.relatives', $employee) }}" class="btn btn-outline-success mr-2 my-1">
                <i class="fas fa-users mr-1"></i> 
                <span>{{$t('add_relatives')}}</span>
            </a>
            <!-- @if (Auth::user()->hasPermissionTo('education_diploma_create')) -->
                <a href="{{ route('employees.education-diplomas.create', $employee) }}" class="btn btn-outline-success mr-2 my-1">
                    <i class="fas fa-plus mr-1"></i> 
                    <span>{{$t('add_education_diploma')}}</span>
                </a>
            <!-- @endif -->


            <!-- @if (Auth::user()->hasPermissionTo('science_diploma_create')) -->
                <a href="{{ route('employees.scient-diplomas.create', $employee) }}" class="btn btn-outline-success mr-2 my-1">
                    <i class="fas fa-plus mr-1"></i> 
                    <span>{{$t('add_scient_diploma')}}</span>
                </a>
            <!-- @endif -->

            <!-- @if (Auth::user()->hasPermissionTo('speciality_category_create')) -->

            <a href="{{ route('specialty-categories.create', $employee) }}"
            class="btn btn-outline-success mr-2 my-1">
                <i class="fas fa-plus mr-1"></i>  
                <span>{{$t('create_specialty_category')}}</span>
            </a>
            <!-- @endif -->
            <!-- @if($workplaceIsCommon) -->
                <a href="javascript:void(0)" class="btn btn-outline-success mr-2 my-1" onclick="modal.showModal()">
                    <i class="fas fa-plus mr-1"></i> 
                    <span>{{$t('add_leave')}}</span>
                </a>
            <!-- @endif -->
        </div>
    </div>











    <div class="user__info" id="user_info">
        <div class="user__info_left card">
            <div class="user__info_left_photo">
                <!-- <img src="APP_URL+ ':' + PORT + personDetails.photo" alt=""> -->
            </div>
            <span class="user__info_left_full_name">
                <!-- {{$employee->employeeNames[0]->firstname}}
                {{$employee->employeeNames[0]->lastname}}
                {{$employee->employeeNames[0]->middlename}} -->
            </span>

            <span  class="user__info_left_position">
                <template v-for="(place, index) in workplaces">{{index == 0 ? place.organization_structure.position.name : ', ' + place.organization_structure.position.name}}</template>
            </span>
            

            <!-- @foreach ($employee->employeeAddresses as $key=>$address) -->
            <span class="user__info_left_address">
                <!-- {{ $address->country->name ? $address->country->name . ', ' : '' }} 
                {{ $address->state->name ? $address->state->name . ', ' : '' }}
                {{ $address->city->name ? $address->city->name . ', ' : '' }}
                {{ $address->district->name ? $address->district->name . ', ' : '' }}
                {{ $address->postal_code ? $address->postal_code . ', ' : '' }}
                {{ $address->line ? $address->line : '' }} -->
            </span>
            <!-- @endforeach -->

            <!-- @foreach ($employee->employeeTelecoms as $telecom) -->
            <!-- @if ($telecom->contactPointSystem->label == 'email') -->
                <span class="user__info_left_email">
                    <!-- {{ $telecom->value ?? '' }} -->
                </span>
            <!-- @endif -->
            <!-- @endforeach -->

            <!-- @foreach ($employee->employeeTelecoms as $telecom) -->
            <!-- @if ($telecom->contactPointSystem->label == 'phone') -->
            <button class="user__info_left_phone_btn">
                <img src="../../assets/icons/Calling.svg" alt="">
                <span class="ml-1">
                    <!-- {{ $telecom->value ?? '' }} -->
                </span>

                <!-- <div class="card-header">
                    <h4>{{$t('contact_points')}}</h4>
                </div>
                <div class="card-body">
                    @foreach ($employee->employeeTelecoms as $telecom)
                        <table class="table table-bordered table-hover">
                            <tbody>
                            @if ($telecom->contactPointSystem->label == 'phone')
                                <tr>
                                    <th class="w-50">
                                        {{$t('phone')}} &nbsp;({{ $telecom->contactPointUse->name }})
                                    </th>
                                    <td>{{ $telecom->value ?? '' }}</td>
                                </tr>
                            @endif
                            @if ($telecom->contactPointSystem->label == 'email')
                                <tr>
                                    <th class="w-50">
                                        {{$t('email')}} &nbsp;({{ $telecom->contactPointUse->name }})
                                    </th>
                                    <td>{{ $telecom->value ?? '' }}</td>
                                </tr>
                            @endif
                            @if ($telecom->contactPointSystem->label == 'sms')
                                <tr>
                                    <th class="w-50">
                                        {{$t('sms')}} &nbsp;({{ $telecom->contactPointUse->name }})
                                    </th>
                                    <td>{{ $telecom->value }}</td>
                                </tr>
                            @endif
                            @if ($telecom->contactPointSystem->label == 'url')
                                <tr>
                                    <th class="w-50">
                                        {{$t('url')}} &nbsp;({{ $telecom->contactPointUse->name }})
                                    </th>
                                    <td>{{ $telecom->value }}</td>
                                </tr>
                            @endif
                            </tbody>
                        </table>
                    @endforeach
                </div> -->



            </button>
            <!-- @endif -->
            <!-- @endforeach -->
        </div>
        <div class="user__info_right">

            <div class="card" id="by-type-region">
                <div class="card-body" id="by-type">

                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#user__main_data">{{$t('main_data')}} </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#user__workplace">{{$t('work_place')}} </a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#user__education">{{$t('education')}} </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#user__address">{{$t('the_address')}} </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#user__vacation">{{$t('vacation')}} </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#user__other">{{$t('other')}} </a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade in active show" id="user__main_data">
                            <!-- <span class="ml-1" v-pre>{{ $employee->employeeTelecoms }}</span> -->


                            <div class="d-flex justify-space-between mt-4 mb-3">
                                <span class="user__info_right_title">Личные и паспортные данные</span>
                                <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#personal_info_modal" >
                                    <!-- @click.prevent = "showMainModal({{$employee->load('nationality')->load('citizenship')->load('birthCountry')}})" -->
                                    <img src="../../assets/icons/Edit.svg" alt="">
                                </button>
                            </div>


                            <div class="user__info_right_table">
                                <table class="table table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <th class="w-50">ID</th>
                                            <!-- <td>{{ $employee->id }}</td> -->
                                        </tr>
                                        <!-- @if ($employee->user) -->
                                            <tr>
                                                <th class="w-50">{{$t('username')}}</th>
                                                <!-- <td>{{ $employee->user->username ?? '' }}</td> -->
                                            </tr>
                                        <!-- @endif -->
                                        <tr>
                                            <th class="w-50">{{$t('pin')}}</th>
                                            <!-- <td>{{ $employee->pinfl }}</td> -->
                                        </tr>

                                        <!-- {{--
                                            <tr>
                                                <th class="w-50">{{$t('inn')}}</th>
                                                <td>{{$employee->tin}}</td>
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('inps')}}</th>
                                                <td>{{$employee->inps}}</td>
                                            </tr> 
                                        --}} -->

                                        <tr>
                                            <th class="w-50">{{$t('date_of_birth')}}</th>
                                            <!-- <td>{{ $employee->birth_date }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('nationality')}}</th>
                                            <!-- <td>{{ $employee->nationality->name ?? '' }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('birth_country')}}</th>
                                            <!-- <td>{{ $employee->birthCountry->name ?? '' }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('userGenders.$gender')}}</th>
                                            <!-- <td>{{ __("genders.$employee->gender") }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('citizenship')}}</th>
                                            <!-- <td>{{ $employee->citizenship->name ?? '' }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('birth_place')}}</th>
                                            <!-- <td>{{ $employee->birth_place }}</td> -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>




                            <div class="d-flex justify-space-between mt-4 mb-3">
                                <span class="user__info_right_title">Документ, удостоверяющий личность</span>
                                <!-- {{-- <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#passport_info_modal">
                                    <img src="../../assets/icons/Edit.svg" alt="">
                                </button> --}} -->
                            </div>

                            <div class="user__info_right_table">
                                <!-- @foreach ($employee->employeeIdentityCards as $identityCard) -->
                                    <table class="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th class="w-50">{{$t('identity_card_type')}}</th>
                                                <!-- <td>{{ $identityCard->identityCardType->name ?? '' }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('issuer_name')}}</th>
                                                <!-- <td>{{ $identityCard->issuer_name }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('identity_card_number')}}</th>
                                                <!-- <td>{{ $identityCard->identity_card_number }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('start_date')}}</th>
                                                <!-- <td>{{ $identityCard->start_date }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('end_date')}}</th>
                                                <!-- <td>{{ $identityCard->end_date }}</td> -->
                                            </tr>
                                        </tbody>
                                    </table>
                                <!-- @endforeach -->
                            </div>


                        </div>
                        <div class="tab-pane fade in" id="user__workplace">
                            <div id="workplace-status">

                                <div class="my-5">
                                    <hr>
                                    <h4 class="text-center my-1">{{$t('current_workplaces')}}</h4>
                                    <hr>
                                </div>
                                <div v-for="(place, index) in workplaces" :key="index">
    
                                    <div class="d-flex justify-space-between mt-4 mb-3">
                                        <span class="user__info_right_title">{{ place.organization_structure.organization.name_full ?? '' }}</span>
                                        <span>
                                        <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#work_info_modal">
                                            <img src="../../assets/icons/Edit.svg" alt="">
                                        </button>
                                        <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                        </span>
                                    </div>
        
                                    <div class="user__info_right_table">
                                        
                                        <table class="table table-bordered table-hover mb-3">
                                            <tbody>
                                                <tr>
                                                    <th class="w-50">{{$t('organization')}}</th>
                                                    <td>{{ place.organization_structure.organization.name_full ?? '' }}</td>
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('department')}}</th>
                                                    <td>{{ place.organization_structure?.department?.name ?? '-' }}</td>
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('position')}}</th>
                                                    <!-- <td>{{place.organization_structure.position.name}}</td> -->
                                                    <td>{{place.full_path}}</td>
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('workplace_rate')}}</th>
                                                    <td>{{ place.rate ?? '-' }}</td>
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('start_date')}}</th>
                                                    <td>{{ place.start_date ?? '-' }}</td>
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('end_date')}}</th>
                                                    <td>{{ place.end_date ?? '-' }}</td>
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('is_active')}}</th>
                                                    <td>
                                                        <!-- @if($workplaceIsCommon) -->
                                                            <div class="form-group pr-2">
                                                                <div class="custom-control custom-switch"
                                                                    v-on:click="onStatusChange(index,place)">
                                                                    <input type="checkbox" class="custom-control-input" :key="place.id"
                                                                        :checked="place.status">
                                                                    <label class="custom-control-label small"
                                                                        for="is_active">
                                                                        <!-- {{place.status?"{{$t('active')}}":"{{$t('inactive')}}"}} -->
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        <!-- @else -->
                                                            <!-- <span>{{place.status?"{{$t('active')}}":"{{$t('inactive')}}"}}<span> -->
                                                        <!-- @endif -->
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
    
                                    </div>
    
                                </div>
                            </div>

                            <div>
                                <div class="my-5">
                                    <hr>
                                    <h4 class="text-center my-1">{{$t('previous_workplaces')}}</h4>
                                    <hr>
                                </div>
                                <!-- @if(($oldWorkplaces = $employee->oldWorkplaces) && $employee->oldWorkplaces->count())
                                    @foreach($oldWorkplaces->sortByDesc('start_date') as $ow) -->
                                    <div class="d-flex justify-space-between mt-4 mb-3">
                                        <span class="user__info_right_title">
                                            <!-- {{ $ow->organization }} -->
                                        </span>
                                        <span>
                                            <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#worked_info_modal" >
                                            <!-- @click="getId({{$ow->id}})" -->
                                                <img src="../../assets/icons/Edit.svg" alt="">
                                            </button>
                                            <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                        </span>
                                    </div>
                                    
                                    <div class="user__info_right_table mb-3">
                                        <table class="table table-bordered table-hover mb-3">
                                            <tbody>
                                                <tr>
                                                    <th class="w-50">{{$t('organization')}}</th>
                                                    <!-- <td>{{$ow->organization}}</td> -->
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('department')}}</th>
                                                    <!-- <td>{{$ow->department}}</td> -->
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('position')}}</th>
                                                    <!-- <td>{{$ow->position}}</td> -->
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('workplace_rate')}}</th>
                                                    <!-- <td>{{$ow->rate}}</td> -->
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('start_date')}}</th>
                                                    <!-- <td>{{$ow->start_date}}</td> -->
                                                </tr>
                                                <tr>
                                                    <th class="w-50">{{$t('end_date')}}</th>
                                                    <!-- <td>{{$ow->end_date}}</td> -->
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- @endforeach
                                @endif -->

                            </div>
                        </div>
                        <div class="tab-pane fade in" id="user__education">
                            <!-- @if(($educationDiplomas = $employee->educationDiplomas) && $employee->educationDiplomas->count())
                                @foreach ($educationDiplomas as $educationDiploma) -->

                                <div class="d-flex justify-content-end align-center mt-3 mb-4">
                                    <!-- @i f (Auth::user()->hasPermissionTo('training_create')) -->
                                        <a href="{{ route('education-diplomas.trainings.create', $educationDiploma) }}" class="btn bg-info">
                                            {{$t('create_training')}}
                                        </a>
                                    <!-- @endif -->
                                </div>


                                <div class="d-flex justify-content-between align-center mt-3 mb-2">
                                    <span class="user__info_right_title">
                                        <!-- {{ $educationDiploma->faculty->name ?? '' }} -->
                                    </span>
                                    <div class="d-flex align-center">
                                        <!-- @if (Auth::user()->hasPermissionTo('education_diploma_edit')) -->
                                            <!-- <a href="{{ route('employees.education-diplomas.edit', [$employee, $educationDiploma]) }}" class="ml-2"> -->
                                                <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#education_info_modal">
                                                    <img src="../../assets/icons/Edit.svg" alt="">
                                                </button>
                                            <!-- </a> -->
                                        <!-- @endif -->
                                        <!-- @if (Auth::user()->hasPermissionTo('education_diploma_create')) -->
                                            <form action="{{ route('employees.education-diplomas.destroy', [$employee, $educationDiploma]) }}" method="POST">
                                                <!-- @csrf
                                                @method('DELETE') -->
                                                <button type="submit" class="p-0 ml-2 border-none bg-white">
                                                    <!-- <i class="fa fa-trash" style="color: #ffffff"></i> -->
                                                    <img src="../../assets/icons/Delete.svg" alt="">
                                                </button>
                                            </form>
                                        <!-- @endif -->
                                    </div>
                                </div>
                                <div class="user__info_right_table">
                                    <table class="table table-bordered table-hover">

                                        <tbody>
                                        <tr>
                                            <th class="w-50">{{$t('specialty')}}</th>
                                            <!-- <td>{{ $educationDiploma->faculty->name ?? '' }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('education_level')}}</th>
                                            <!-- <td>{{ $educationDiploma->educationLevel->name ?? '' }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('organization')}}</th>
                                            <!-- <td>{{ $educationDiploma->thatTimeInstitution->name ?? '' }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('number')}}</th>
                                            <!-- <td>{{ $educationDiploma->number }}</td> -->
                                        </tr>
                                        <!-- {{-- <tr>
                                            <th class="w-50">{{$t('issued_date')}}</th>
                                            <td>{{ $educationDiploma->issued_date }}</td>
                                        </tr> --}} -->
                                        <tr>
                                            <th class="w-50">{{$t('start_date')}}</th>
                                            <!-- <td>{{ $educationDiploma->start_date }}</td> -->
                                        </tr>
                                        <tr>
                                            <th class="w-50">{{$t('end_date')}}</th>
                                            <!-- <td>{{ $educationDiploma->end_date }}</td> -->
                                        </tr>
                                        <!-- @if ($educationDiploma->specialtyCategory->count() > 0) -->
                                            <tr>
                                                <th>{{$t('specialty_categories')}}</th>
                                                <td>
                                                    <!-- @foreach ($educationDiploma->specialtyCategory as $specialtyCategory) -->
                                                        <!-- <table class="table table-bordered table-hover">
                                                            <tbody>
                                                            <tr>
                                                                <th class="w-50">{{$t('category')}}</th>
                                                                <td>{{ $specialtyCategory->category->name ?? '' }}</td>
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('organization')}}</th>
                                                                <td>{{ $specialtyCategory->organization->name_full ?? '' }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('certificate_number')}}</th>
                                                                <td>{{ $specialtyCategory->certificate_number }}</td>
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('certificate_date')}}</th>
                                                                <td>{{ $specialtyCategory->certificate_date }}</td>
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('issued_date')}}</th>
                                                                <td>{{ $specialtyCategory->issued_date }}</td>
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('certificate_validity')}}
                                                                </th>
                                                                <td>{{ $specialtyCategory->certificate_validity }}</td>
                                                            </tr>
                                                            </tbody>
                                                        </table> -->
                                                        <br>
                                                    <!-- @endforeach -->
                                                </td>
                                            </tr>
                                        <!-- @endif
                                        @if ($educationDiploma->trainings->count() > 0) -->
                                            <tr>
                                                <th>{{$t('trainings')}}</th>
                                                <td>
                                                    <!-- @foreach ($educationDiploma->trainings as $training) -->
                                                        <table class="table table-bordered table-hover">
                                                            <thead>
                                                            <form
                                                                action="{{ route('education-diplomas.trainings.destroy', [$educationDiploma, $training]) }}"
                                                                method="POST">
                                                                <!-- @csrf
                                                                @method('DELETE') -->
                                                                <button type="submit" class="btn btn-danger btn-sm">
                                                                    <i class="fa fa-trash" style="color: #ffffff"></i>
                                                                </button>
                                                            </form>
                                                            <a href="{{ route('education-diplomas.trainings.edit', [$educationDiploma, $training]) }}"
                                                            class="btn bg-info btn-sm">
                                                                <i class="fa fa-edit" style="  color: #ffffff"></i>
                                                            </a>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <th class="w-50">{{$t('organization')}}</th>
                                                                <!-- <td>{{ $training->organization->name_full ?? '' }}</td> -->
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('certificate_number')}}</th>
                                                                <!-- <td>{{ $training->certificate_number }}</td> -->
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('certificate_date')}}</th>
                                                                <!-- <td>{{ $training->certificate_date }}</td> -->
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('duration')}}</th>
                                                                <!-- <td>{{ $training->duration }}</td> -->
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('start_date')}}</th>
                                                                <!-- <td>{{ $training->start_date }}</td> -->
                                                            </tr>
                                                            <tr>
                                                                <th class="w-50">{{$t('end_date')}}</th>
                                                                <!-- <td>{{ $training->end_date }}</td> -->
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <br>
                                                    <!-- @endforeach -->
                                                </td>
                                            </tr>
                                        <!-- @endif -->

                                        <!-- @if ($educationDiploma->specialtyCategory->count() > 0) -->
                                            <tr>
                                                <th>{{$t('specialty_categories')}}</th>
                                                <td>
                                                    <!-- @foreach ($educationDiploma->specialtyCategory as $specialtyCategory) -->
                                                        <!-- <table class="table table-bordered table-hover">
                                                            <thead>
                                                                <form
                                                                    action="{{ route('education-diplomas.specialty-categories.destroy', [$educationDiploma, $specialtyCategory]) }}"
                                                                    method="POST">
                                                                    @csrf
                                                                    @method('DELETE')
                                                                    <button type="submit" class="btn btn-danger btn-sm">
                                                                        <i class="fa fa-trash" style="color: #ffffff"></i>
                                                                    </button>
                                                                </form>
                                                                <a href="{{ route('education-diplomas.specialty-categories.edit', [$educationDiploma, $specialtyCategory]) }}"
                                                                class="btn bg-info btn-sm">
                                                                    <i class="fa fa-edit" style="  color: #ffffff"></i>
                                                                </a>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th class="w-50">{{$t('category')}}</th>
                                                                    <td>{{ $specialtyCategory->category->name ?? '' }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('organization')}}</th>
                                                                    <td>{{ $specialtyCategory->organization->name_full ?? '' }}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('certificate_number')}}</th>
                                                                    <td>{{ $specialtyCategory->certificate_number }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('certificate_date')}}</th>
                                                                    <td>{{ $specialtyCategory->certificate_date }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('issued_date')}}</th>
                                                                    <td>{{ $specialtyCategory->issued_date }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('certificate_validity')}}</th>
                                                                    <td>{{ $specialtyCategory->certificate_validity }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <br> -->
                                                    <!-- @endforeach -->
                                                </td>
                                            </tr>
                                        <!-- @endif -->

                                        </tbody>
                                    </table>
                                </div>
                                <!-- @endforeach -->

                            <!-- @endif -->
                        </div>
                        <div class="tab-pane fade in" id="user__address">
                            <!-- @foreach ($employee->employeeAddresses as $key=>$address) -->

                                <div class="d-flex justify-space-between mt-4 mb-3">
                                    <span class="user__info_right_title">{{$t('the_address')}} {{$key + 1}}</span>
                                    <span>
                                        <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#address_info_modal">
                                            <img src="../../assets/icons/Edit.svg" alt="">
                                        </button>
                                        <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                    </span>
                                </div>
    
                                <div class="user__info_right_table">
                                    
                                    <table class="table table-bordered table-hover">
                                        <tbody>
                                            <!-- {{-- <tr>
                                                <th class="w-50">{{$t('use')}}</th>
                                                <td>{{$address->addressUse->name ?? ''}}</td>
                                            </tr> --}} -->
                                            <tr>
                                                <th class="w-50">{{$t('country')}}</th>
                                                <!-- <td>{{ $address->country->name ?? '' }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('state')}}</th>
                                                <!-- <td>{{ $address->state->name ?? '' }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('city')}}</th>
                                                <!-- <td>{{ $address->city->name ?? '' }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('district')}}</th>
                                                <!-- <td>{{ $address->district->name ?? '' }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('postal_code')}}</th>
                                                <!-- <td>{{ $address->postal_code }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('line')}}</th>
                                                <!-- <td>{{ $address->line }}</td> -->
                                            </tr>
                                            <!-- {{-- <tr>
                                                <th class="w-50">{{$t('start_date')}}</th>
                                                <td>{{ $address->start_date ? $address->start_date->format("Y-m-d") : '' }}</td>
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('end_date')}}</th>
                                                <td>{{ $address->end_date  ? $address->end_date->format("Y-m-d") : '' }}</td>
                                            </tr>
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
                                            </tr> --}} -->
                                        </tbody>
                                    </table>

                                </div>
                            <!-- @endforeach -->
                        </div>
                        <div class="tab-pane fade in" id="user__vacation">
                            <div id="leave">

                                <div class="d-flex justify-content-end align-center mt-4" @click="showModal()">
                                    <span class="user__info_right_title mr-2">Добавить Отпуск</span>
                                    <img src="../../assets/icons/Plus-circle.svg" alt="">
                                </div>
    
    
    
    
    
    
                                <div>
                                    <div>
                                        <h4>{{$t('leaves')}}</h4>
                                    </div>
    
                                    <div>
                                        <table class="table table-bordered table-hover">
                                            <!-- @if ($employeeLeaves->count() > 0) -->
                                                <tr>
                                                    <td>
                                                        <!-- @foreach ($employeeLeaves as $leave) -->
                                                            <div class="mb-2">
                                                                <!-- {{--<a href="javascript:void(0)"  v-on:click="deleteLeave('{{$leave}}')" class="btn btn-danger btn-sm">
                                                                        <i class="fa fa-trash" style="color: #ffffff"></i>
                                                                    </a>
                                                                --}}
     -->
    
                                                                <!-- @if($workplaceIsCommon) -->
                                                                    <a href="javascript:void(0)" class="btn bg-info btn-sm">
                                                                    <!-- v-on:click="updateLeave({{ $leave }})" -->
                                                                        <i class="fa fa-edit" style="color: #ffffff"></i>
                                                                    </a>
                                                                <!-- @endif -->
    
                                                            </div>
                                                            <table class="table table-bordered table-hover">
                                                                <thead>
    
    
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th class="w-50">{{$t('workplace')}}</th>
                                                                    <!-- <td>{{ $leave->workplace->organizationStructure->organization->name_full . 
                                                                        ' > ' . ($leave->workplace->organizationStructure->ancestors->count()
                                                                        ? implode(
                                                                                ' > ',
                                                                                $leave->workplace->organizationStructure->ancestors->values()->pluck('node.name')->toArray(),
                                                                            ) .
                                                                            ' > ' .
                                                                            $leave->workplace->organizationStructure->position->name
                                                                        : '') }}
                                                                    </td> -->
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('leave_type')}}</th>
                                                                    <!-- <td>{{ $leave->leaveType->name }}</td> -->
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('start_date')}}</th>
                                                                    <!-- <td>{{ $leave->start_date }}</td> -->
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('end_date')}}</th>
                                                                    <!-- <td>{{ $leave->end_date }}</td> -->
                                                                </tr>
                                                                <tr>
                                                                    <th class="w-50">{{$t('commentary')}}</th>
                                                                    <!-- <td>{{ $leave->note }}</td> -->
                                                                </tr>
    
                                                                </tbody>
                                                            </table>
                                                            <br>
                                                        <!-- @endforeach -->
                                                    </td>
                                                </tr>
                                            <!-- @endif -->
                                        </table>
                                    </div>
    
                                    <div class="row">
                                        <!-- <modal v-if="showLeaveModal" @close="showLeaveModal = false">
                                            <form id="modal-form" slot="modal-container" @submit.prevent="submit">
    
                                                <div class="" slot=" header">
                                                    <h4 class="modal-title mb-4">
                                                        {{$t('add_leave')}}
                                                    </h4>
                                                </div>
    
                                                
                                                <div class="" slot="body">
    
                                                    <div class="form-group">
                                                        <label>{{$t('workplace')}}</label>
                                                        <div class="row">
                                                            <div class="col-12" v-for="(workplace,index) in employee_workplaces"
                                                                :key="index">
                                                                <label>
                                                                    <input type="checkbox" name="workplace_id[]" id="workplace_id"
                                                                        v-bind:class="[submitType==submitTypes.update?'d-none':'']"
                                                                        v-model="workplace_id" :value="workplace.id"
                                                                        :required="!workplace_id.length">
                                                                    {{ workplace . full_path }}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                                    <div class="form-group">
                                                        <label>{{$t('leave_type')}}</label>
                                                        <select class="form-control" name="leave_type_id" id="leave_type"
                                                                v-model="leave_type_id" required>
                                                            <option value="">{{$t('choose')}}</option>
                                                            <option v-for="(leave, index) in leaves" :value="leave.id" :key="index">
                                                                {{ leave . name }}
                                                            </option>
                                                        </select>
                                                    </div>
    
    
                                                    <div class="form-group">
                                                        <label>{{$t('start_date')}}</label>
                                                        <input type="date" class="form-control" name="start_date" v-model="start_date" required>
                                                    </div>
    
                                                    <div class="form-group">
                                                        <label>{{$t('end_date')}}</label>
                                                        <input type="date" class="form-control" name="end_date" v-model="end_date">
                                                    </div>
    
                                                    <div class="form-group">
                                                        <label>{{$t('commentary')}}</label>
                                                        <textarea type="text" class="form-control" name="note" id="note" v-model="note"></textarea>
                                                    </div>
    
                                                </div>
    
                                                
                                                <div class="d-flex justify-content-end" slot="footer">
                                                    <button type="button" class="btn btn-light"
                                                            v-on:click="cancel">{{$t('cancel')}}</button>
                                                    <button type="submit" class="btn btn-primary">{{$t('save')}}</button>
                                                </div>
                                            </form>
    
                                        </modal> -->
                                    </div>
    
                                </div>









                            </div>






                        </div>
                        <div class="tab-pane fade in" id="user__other">

                            <!-- @if(($languages = $employee->languages) && $employee->languages->count()) -->
                                <div class="">
                                    <!-- <div class="my-5">
                                        <hr>
                                        <h4 class="text-center my-1">{{$t('employee_languages')</h4>
                                        <hr>
                                    </div> -->

                                    <div class="d-flex justify-space-between mt-4 mb-3">
                                        <span class="user__info_right_title">{{$t('employee_languages')}}</span>
                                        <span>
                                            <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#languages_info_modal">
                                                <img src="../../assets/icons/Edit.svg" alt="">
                                            </button>
                                            <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                        </span>
                                    </div>
                                    <div class="user__info_right_table">
                                        <table class="table table-bordered table-hover">
                                            <tbody>
                                            <!-- @foreach ($languages as $key => $language) -->
                                                <tr>
                                                    <th class="w-50">
                                                        {{$t('language')}} #{{$key + 1}}
                                                    </th>
                                                    <td>
                                                        <!-- {{ $language->languageType->name }} -->
                                                    </td>
                                                </tr>
                                            <!-- @endforeach -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            <!-- @endif -->



                            <!-- @if(($governmentAwards = $employee->governmentAwards) && $employee->governmentAwards->count()) -->
                                <div>
                                    <!-- <div class="my-5">
                                        <hr>
                                        <h4 class="text-center my-1">{{$t('employee_government_awards')</h4>
                                        <hr>
                                    </div> -->

                                    <div class="d-flex justify-space-between mt-4 mb-3">
                                        <span class="user__info_right_title">{{$t('employee_government_awards')}}</span>
                                        <span>
                                            <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#government_info_modal">
                                                <img src="../../assets/icons/Edit.svg" alt="">
                                            </button>
                                            <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                        </span>
                                    </div>
                                    <div class="user__info_right_table">
                                        <table class="table table-bordered table-hover">
                                            <tbody>
                                            <!-- @foreach ($governmentAwards as $governmentAward) -->
                                                <tr>
                                                    <th class="w-50">
                                                        {{$t('government_award')}}
                                                    </th>
                                                    <td>
                                                        <!-- {{ $governmentAward->governmentAwardType->name }} -->
                                                    </td>
                                                </tr>
                                            <!-- @endforeach -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            <!-- @endif -->
                            <!-- @if($politicalParty = $employee->politicalParty) -->
                                <div>
                                    <!-- <div class="my-5">
                                        <hr>
                                        <h4 class="text-center my-1">{{$t('employee_political_party')</h4>
                                        <hr>
                                    </div> -->

                                    <div class="d-flex justify-space-between mt-4 mb-3">
                                        <span class="user__info_right_title">{{$t('employee_political_party')}}</span>
                                        <span>
                                            <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#political_party_info_modal">
                                                <img src="../../assets/icons/Edit.svg" alt="">
                                            </button>
                                            <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                        </span>
                                    </div>
                                    <div class="user__info_right_table">
                                        <table class="table table-bordered table-hover">
                                            <tbody>
                                            <tr>
                                                <th>{{$t('political_party')}}</th>
                                                <td class="w-50">
                                                    <!-- {{ $politicalParty->politicalPartyType->name }} -->
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            <!-- @endif -->


                            <div>
                                <!-- <div class="my-5">
                                    <hr>
                                    <h4 class="text-center my-1">{{$t('specialty_categories')</h4>
                                    <hr>
                                </div> -->

                                <div class="d-flex justify-space-between mt-4 mb-3">
                                    <span class="user__info_right_title">{{$t('specialty_categories')}}</span>
                                    <span>
                                        <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#speciality_categories_info_modal">
                                            <img src="../../assets/icons/Edit.svg" alt="">
                                        </button>
                                        <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                    </span>
                                </div>
                                <!-- @foreach ($employee->specialtyCategories as $specialtyCategory) -->
                                <div class="d-flex my-2 table-actions">
                                    <form
                                        action="{{ route('specialty-categories.destroy', ['employee'=>$employee,'specialty_category'=> $specialtyCategory]) }}"
                                        method="POST">
                                        <!-- @csrf
                                        @method('DELETE') -->
                                        <button type="submit" class="btn btn-danger btn-sm">
                                            <i class="fa fa-trash" style="color: #ffffff"></i>
                                        </button>
                                    </form>
                                    <a href="{{ route('specialty-categories.edit', ['employee'=>$employee,'specialty_category'=> $specialtyCategory]) }}" class="ml-2 btn bg-info btn-sm">
                                        <i class="fa fa-edit" style="  color: #ffffff"></i>
                                    </a>
                                </div>
                                <div class="user__info_right_table">
                                    <table class="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th class="w-50">{{$t('category')}}</th>
                                                <!-- <td class="text-capitalize">{{ $specialtyCategory->category->name ?? '' }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('specialty_category_type')}}</th>
                                                <!-- <td>{{ $specialtyCategory->specialtyCategoryType->name }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('certificate_number')}}</th>
                                                <!-- <td>{{ $specialtyCategory->certificate_number }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('issued_date')}}</th>
                                                <!-- <td>{{ $specialtyCategory->issued_date }}</td> -->
                                            </tr>
                                            <tr>
                                                <th class="w-50">{{$t('certificate_validity')}}</th>
                                                <!-- <td>{{ $specialtyCategory->certificate_validity }}</td> -->
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- @endforeach -->
                            </div>


                            <!-- @if(($relatives = $employee->relatives) && $employee->relatives->count()) -->
                                <div class="">
                                    <!-- <div class="my-5">
                                        <hr>
                                        <h4 class="text-center my-1">{{$t('relatives')</h4>
                                        <hr>
                                    </div> -->

                                    <div class="d-flex justify-space-between mt-4 mb-3">
                                        <span class="user__info_right_title">{{$t('relatives')}}</span>
                                        <span>
                                            <button type="button" class="border-none bg-white" data-toggle="modal" data-target="#relatives_info_modal">
                                                <img src="../../assets/icons/Edit.svg" alt="">
                                            </button>
                                            <img class="ml-2" src="../../assets/icons/Delete.svg" alt="">
                                        </span>
                                    </div>
                                    <!-- @foreach ($relatives as $relative) -->
                                    <!-- <div class="d-flex justify-content-between mt-4 mb-3">
                                        <h4 class="mb-0">{{$relative->relativeType->name}}</h4>
                                    </div> -->
                                    <div class="user__info_right_table mb-3">
                                        <table class="table table-bordered table-hover">
                                            <tbody>
                                            <tr>
                                                <th class="w-50">
                                                    <!-- {{$relative->relativeType->name}} -->
                                                </th>
                                                <td>
                                                    <!-- {{ $relative->full_name }} -->
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="w-50">
                                                    {{$t('birth_info')}}
                                                </th>
                                                <td>
                                                    <!-- {{ $relative->birth_info }} -->
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="w-50">
                                                    {{$t('workplace_and_position')}}
                                                </th>
                                                <td>
                                                    <!-- {{ $relative->workplace_and_position }} -->
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="w-50">
                                                    {{$t('the_address')}}
                                                </th>
                                                <td>
                                                    <!-- {{ $relative->address }} -->
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- @endforeach -->
                                </div>
                            <!-- @endif -->
                        </div>
                    </div>
                    </div>
                </div>
            </div>

















            <!-- Button trigger modal -->
            

            <!-- Modal -->
            <div class="modal fade " id="personal_info_modal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="" @click.prevent="cancelModal('#personal_info_modal')">
                                <span class="modal__block_title">Редактировать сотрудника</span>


                                <span class="modal__block_subtitle">{{$t('personal_and_passport_data')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100 d-flex align-center">
                                            <div class="form-group">
                                                <label for="pinfl">{{$t('pin')}}</label>
                                                <input type="text" class="form-control" name="employee[pinfl]" id="pinfl" v-model="personalInfo.pinfl">
                                            </div>
                                            <button class="modal__block_btn_primary ml-2" style="margin-top: 8px;">{{$t('find')}}</button>
                                        </div>

                                        <div class="w-100">
                                            <div class="modal__block_img"></div>
                                            <div class="form-group">
                                                <label for="birth_date">{{$t('date_of_birth')}}</label>
                                                <input type="text" class="form-control" name="employee[birth_date]" id="birth_date" v-model="personalInfo.birth_date">
                                            </div>
                                            <div class="form-group">
                                                <label for="nationality_id">{{$t('nationality')}}</label>
                                                <!-- {{-- <input type="text" class="form-control" name="employee[nationality_id]" id="nationality_id" v-model="personalInfo.nationality_id"> --}} -->
                                                <select2 :options="nationalities" term="name" name="nationality_id"
                                                    id="nationality" class="form-control"
                                                    data-placeholder="{{$t('choose')}}" v-model="personalInfo.nationality_id">
                                                </select2>

                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label for="gender">{{$t('userGender')}}</label>
                                                <input type="text" class="form-control" name="employee[gender]" id="gender" v-model="personalInfo.gender">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label for="citizenship_id">{{$t('citizenship')}}</label>
                                                <select2 :options="countries" term="name" name="citizenship_id" id="citizenship_id"
                                                    class="form-control" data-placeholder="{{$t('choose')}}"
                                                    v-model="personalInfo.citizenship_id">
                                                </select2>
                                                <!-- {{-- <input type="text" class="form-control" name="employee[citizenship_id]" id="citizenship_id" v-model="personalInfo.citizenship_id"> --}} -->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label for="firstname">{{$t('personName')}}</label>
                                                <input type="text" class="form-control" name="firstname" id="firstname" v-model="fullnameInfo.firstname">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label for="lastname">{{$t('surname')}}</label>
                                                <input type="text" class="form-control" name="lastname" id="lastname" v-model="fullnameInfo.lastname">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label for="middlename">{{$t('middle_name')}}</label>
                                                <input type="text" class="form-control" name="middlename" id="middlename" v-model="fullnameInfo.middlename">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label for="birth_place">{{$t('birth_place')}}</label>
                                                <input type="text" class="form-control" name="birth_place" id="birth_place" v-model="personalInfo.birth_place">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label for="birth_country_id">{{$t('birth_country')}}</label>
                                                <select2 :options="countries" term="name" name="birth_country_id"
                                                    id="birth_country_id" class="form-control"
                                                    data-placeholder="{{$t('choose')}}" v-model="personalInfo.birth_country_id">
                                                </select2>
                                                <!-- {{-- <input type="text" class="form-control" name="birth_country_id" id="birth_country_id" v-model="personalInfo.birth_country_id"> --}} -->
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey" @click.prevent="cancelModal('#personal_info_modal')">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4" >{{$t('save')}}</button>
                                    <!-- @click.prevent="saveData({{$employee}})" -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <!-- Modal  3-->
            <div class="modal fade " id="work_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>







                                <span class="modal__block_subtitle">{{$t('current_workplaces')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">



                                    <div class="row" v-for="(item, index) in workplaces" :key="index" v-bind:class="(workplaces.length-1)!=index?'mb-2 pb-4 border-bottom border-light':''">

                                        <input type="hidden" :value="item.id" :name="'workplace['+index+'][id]'">
                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label for="organization">{{$t('organization')}}<span
                                                        class="text-red">*</span></label>
                                                <select2 :options="organizations" term="name_full"
                                                    class="form-control"
                                                    data-placeholder="{{$t('organization')}}"
                                                    >
                                                </select2>
                                            </div>

                                            <div class="form-group">
                                                <label for="position">{{$t('position')}}<span
                                                        class="text-red">*</span></label>
                                                <select2 :options="item.positions" term="name"
                                                    :name="'workplace['+index+'][position_id]'" :url="item.positionUrl"
                                                    :id="'position_'+index" class="form-control"
                                                    data-placeholder="{{$t('position')}}" v-model="item.position_id"
                                                    required>
                                                </select2>
                                            </div>
                                            <input type="hidden" v-model="item.organization_structure_id"
                                                :name="'workplace['+index+'][organization_structure_id]'">

                                            <div class="form-group">
                                                <label>{{$t('start_date')}}</label>
                                                <input type="date" class="form-control"
                                                    :name="'workplace['+index+'][start_date]'" v-model="item.start_date" required>
                                            </div>

                                        </div>


                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label for="department">{{$t('department')}}<span
                                                        class="text-red">*</span></label>
                                                <treeselect v-model="item.node_id"
                                                    v-on:select="(node)=>onDepartmentSelect(node,item)" :multiple="false"
                                                    :options="item.treeData" :value="item.node_id||null" :clearable="false"
                                                    :searchable="false" placeholder="{{$t('choose')}}">
                                                </treeselect>
                                                <input type="hidden" v-model="item.department_id"
                                                    :name="'workplace['+index+'][department_id]'" />

                                            </div>


                                            <div class="form-group">
                                                <label>{{$t('workplace_rate')}}<span
                                                        class="text-red">*</span></label>
                                                <input type="number" step="0.01" min="0.01" max="2" class="form-control"
                                                    :name="'workplace['+index+'][rate]'" v-model="item.rate" required>
                                            </div>

                                            <div class="form-group">
                                                <label>{{$t('end_date')}}</label>
                                                <input type="date" class="form-control"
                                                    :name="'workplace['+index+'][end_date]'" v-model="item.end_date">
                                            </div>

                                        </div>

                                        <div
                                            class="col-sm-2 d-flex align-content-center align-items-center justify-content-end">
                                            <span type="button" class="btn btn-danger" v-if="!index==0"
                                                v-bind:class="[index==0?'d-none':'d-block']"
                                                v-on:click="removeWorkplace(index,$event)"><i
                                                    class="fa fa-minus"></i></span>
                                        </div>
                                    </div>





                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('organization')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('position')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('start_date')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('is_active')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('department')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('workplace_rate')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('final_date')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <!-- <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('commentary')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div> -->
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <!-- Modal  4-->
            <div class="modal fade " id="worked_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>


                                <span class="modal__block_subtitle">{{$t('previous_workplaces')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('organization')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('position')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('start_date')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('is_active')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('department')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('workplace_rate')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('final_date')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <!-- <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('commentary')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div> -->
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <!-- Modal  5-->
            <div class="modal fade " id="education_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>



                                <span class="modal__block_subtitle">{{$t('education')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('education_type')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('educational_organization')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('diploma_number')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('final_date')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('education_level')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('specialty')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('start_date')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <!-- Modal  5-->
            <div class="modal fade " id="address_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>



                                <span class="modal__block_subtitle">{{$t('the_address')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('country')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('city')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('postal_code')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('region')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('district')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('line')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <!-- Modal  6-->
            <div class="modal fade " id="languages_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>



                                <span class="modal__block_subtitle">{{$t('employee_languages')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('language')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('language')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('language')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('language')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <!-- Modal  7-->
            <div class="modal fade " id="government_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>



                                <span class="modal__block_subtitle">{{$t('employee_government_awards')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('government_award')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('government_award')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('government_award')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <!-- Modal  8-->
            <div class="modal fade " id="political_party_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>



                                <span class="modal__block_subtitle">{{$t('employee_political_party')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('political_party')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('political_party')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('political_party')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <!-- Modal  9-->
            <div class="modal fade " id="speciality_categories_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>



                                <span class="modal__block_subtitle">{{$t('specialty_categories')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('userGender')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('citizenship')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('personName')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('surname')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <!-- Modal  10-->
            <div class="modal fade " id="relatives_info_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <img class="modal__block_close" src="../../assets/icons/Close-icon.svg" alt="">
                                <span class="modal__block_title">Редактировать сотрудника</span>



                                <span class="modal__block_subtitle">{{$t('relatives')}}</span>

                                <div class="modal__block_form">
                                    <div class="modal__block_form_left">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('personName')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('workplace_and_position')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal__block_form_right">
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('birth_info')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="form-group">
                                                <label>{{$t('the_address')}}</label>
                                                <input type="text" class="form-control" name="note" id="note" v-model="note">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="modal__block_footer">
                                    <button class="modal__block_btn_grey">{{$t('cancel')}}</button>
                                    <button class="modal__block_btn_primary ml-4">{{$t('save')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


















   





      


            
            

    </div>

</template>

<script>
export default {
    components: {
    },
    data(){
        return {
            // ============= PRIMARY START =============
            // search: '',
            APP_URL: 'localhost',
            PORT: '8881',

            page: 1,
            page2: 1,
            page3: 1,
            page4: 1,
            pageCount: 0,
            pageCount2: 0,
            pageCount3: 0,
            pageCount4: 0,


            isshow: false,
            isshow2: false,

            personDetails: {},
            personDetails2: {},

            filterRadio: 'basicInfo',
            organizationStructureId: '',

            departmentInBreadcrumb: false,
            // We need this variable below in order to remove 
            // old breadcrumb names after the name changed.
            departmentInBreadcrumbExist: false, 
            errorMessage: false,
            errorMessage2: false,
            errorMessage3: false,
            // ============= PRIMARY END =============
            




            // ============= SPINNERS START =============
            loading: false,
            loading2: false,
            loading3: false,
            color: '#18A9EB',
            size: '45px',
            spinnerWidth: '5px',
            spinnerHeight: '40px',
            // ============= SPINNERS END =============








            // ============= FILTERS START =============
            leave: null,
            submitTypes: {
                store: 'store',
                update: 'update'
            },
            // employee_workplaces_list: employee_workplaces,
            employee_workplaces_list: [],
            submitType: 'store',

            showLeaveModal: false,
            workplace_id: [],
            // employee_workplaces: employee_workplaces,
            employee_workplaces: [],

            // leaves: @json($leaves),
            leave_type_id: '',
            start_date: '',
            end_date: '',
            note: '',




            workplaces: [],
            loading: false,


            oldWorkplaces: [],
            personalInfo: {
                pinfl: '',
                birth_date: '',
                nationality_id: '',
                gender: '',
                citizenship_id: '',
                
                birth_place: '',
                birth_country_id: '',
            },
            fullnameInfo: {
                firstname: '',
                lastname: '',
                middlename: '',
            },
            // countries: @json($countries),
            // nationalities: @json($nationalities),
            // organizations: @json($organizations),
            countries: [],
            nationalities: [],
            organizations: [],
            // ============= FILTERS END =============








            // ============= DIFFERENT_LISTS START =============
            organizationsList: [],
            departmentsList: [],
            positionsList: [],
            leaveTypeList: [{id: 1, name:'Декретный отпуск'}],
            genderList: [{name: 'Мужчина', value: 'male'}, {name: 'Женщина', value: 'female'}],
            scientLevelsList: [],
            specialitiesList: [],
            educationLevelsList: [],
            institutionsList: [],
            facultiesList: [],
            educationTypesList: [],
            identityCardTypesList: [],
            partyTypesList: [],
            governmentAwardTypesList: [],
            languageList: [],
            nationalitiesList: [],
            countriesList: [],
            categoriesList: [],
            specialityCategoryTypesList: [],
            employeesList: [],
            employeesList2: [],
            employeesList3: [],
            // ============= DIFFERENT_LISTS END =============
            
            

            
            





            // ============= HIERARCHY_LIST START =============
            hierarchyList: [],
            hierarchyList2: [],
            hierarchyListNames: [],
            hierarchyParentId: [],
            hierarchyId: 0,
            hierarchyType: 'organizations',
            // ============= HIERARCHY_LIST END =============








            
            // ============= DELETE_MODAL START =============
            url: '',
            employee: null,
            showDeleteAlertModal: false,
            searchHierarchy: '',
            // ============= DELETE_MODAL END =============
        }
    },
    watch: {
        searchHierarchy(newValue){
            if(newValue){
                let children = this.hierarchyList.data.children.filter((elem) => { return elem.name.includes(newValue) })
                this.hierarchyList2 = children
            }else if(newValue == ''){
                this.hierarchyList2 = this.hierarchyList.data.children
            }
        },
        'filter.education_level_id': {
            handler: async function (newVal, oldVal) {
                await this.getSpecialitiesList();
            },
            deep: true
        },
        'filter.institution_id': {
            handler: async function (newVal, oldVal) {
                await this.getFacultiesList();
            },
            deep: true
        },
        'filterBasic.organization_id': {
            handler: async function (newVal, oldVal) {
                await this.getDepartmentsList();
            },
            deep: true
        },
        'filterBasic.branch_id': {
            handler: async function (newVal, oldVal) {
                await this.getPositionsList();
            },
            deep: true
        },

    },
    computed: {
        
    },
    async created() {
        // ============= GET_GENERAL_APIS START =============
        await this.getOrganizationsList();
        const filters = JSON.parse(sessionStorage.getItem('employeeFilters'));
        if(filters){
            this.filterBasic = filters
        }
        
        // await this.getHierarchy(0);

        await this.getIdentityCardTypesList();
        await this.getLanguageList();
        await this.getPartyTypesList();
        await this.getGovernmentAwardTypesList();
        await this.getNationalitiesList();
        await this.getCountirsList();
        await this.getScientLevelsList();
        await this.getSpecialityCategoryTypesList();
        // ============= GET_GENERAL_APIS END =============






        // ============= GET_EDUCATION_APIS START =============
        await this.getEducationLevelsList();
        await this.getInstitutionsList();
        await this.getFacultiesList();
        await this.getEducationTypesList();
        await this.getCategoriesList();
        // ============= GET_EDUCATION_APIS END =============
    },
    async mounted(){
        if (this.employee_workplaces.length == 1) {
            this.workplace_id.push(this.employee_workplaces[0].id);
        }
        console.log(this.workplaces)


        console.log(this.organizations)
    },
    methods: {
        // ============= ORGANIZATIONS_SEARCH START =============
        async onOrganizationsSearch(search, loading) {
            if(search.length) {
                loading(true);

                clearTimeout(this._timerId)
                this._timerId = setTimeout(async () => {
                    await this.getOrganizationsList(search);
                }, 250)

                loading(false);
            }
        }, 
        // ============= ORGANIZATIONS_SEARCH END =============







        getEmployee(event, employee) {
            this.showDeleteAlertModal = true;
            this.employee = employee;
            this.employee.official_full_name = event.target.getAttribute('data-employee')
            url = "{{ route('employees.destroy', ':employee') }}"

            this.url = url.replace(':employee', employee.id);
        },







        // ============= GENERAL_FUNCTIONS START =============
        cancelModal(id){
            $(id).modal('hide');
        },
        async saveData(employee){
            const employeeData = [
                {
                    id: employee.id,
                    pinfl: employee.pinfl, 
                    birth_date: employee.birth_date, 
                    nationality_id: employee.nationality_id, 
                    gender: employee.gender, 
                    citizenship_id: employee.citizenship_id, 
                    birth_place: employee.birth_place, 
                    birth_country_id: employee.birth_country_id, 
                },
                {
                    firstname: employee.employee_names[0].firstname, 
                    lastname: employee.employee_names[0].lastname, 
                    middlename: employee.employee_names[0].middlename, 
                }
            ]
            await axios.put(`/ajax/employee/${this.personalInfo.id}/update`, employeeData).then(
                response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {

                })
        },
        showMainModal(employee){
            Object.assign(this.personalInfo, {
                id: employee.id,
                pinfl: employee.pinfl, 
                birth_date: employee.birth_date, 
                nationality_id: employee.nationality_id, 
                gender: employee.gender == 'female' ? 'Женщина' : 'Мужчина', 
                citizenship_id: employee.citizenship_id, 
                birth_place: employee.birth_place, 
                birth_country_id: employee.birth_country_id, 
            })


            Object.assign(this.fullnameInfo, {
                id: employee.id,
                firstname: employee.employee_names[0].firstname, 
                lastname: employee.employee_names[0].lastname, 
                middlename: employee.employee_names[0].middlename, 
            })



            // $('#myModal').modal('hide')



            // this.personalInfo: {
            //     pinfl: '',
            //     birth_date: '',
            //     nationality_id: '',
            //     gender: '',
            //     citizenship_id: '',
            //     firstname: '',
            //     lastname: '',
            //     middlename: '',
            //     birth_place: '',
            //     birth_country_id: '',
            // }
        },
        getId(id){
            console.log(id);

            console.log(this.oldWorkplaces);
        },
        submit: function () {
            const payload = {
                leave_type_id: this.leave_type_id,
                start_date: this.start_date,
                end_date: this.end_date,
                note: this.note,
                workplace_id: this.workplace_id
            }

            if (this.submitType == this.submitTypes.store) {
                axios.post("{{ route('employees.leaves.store', $employee) }}", payload).then(
                    response => {
                        console.log(response)
                        this.showLeaveModal = false;
                        this.resetValues();
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                    })

            } else if (this.submitType == this.submitTypes.update) {
                let url = "{{ route('employees.leaves.update', [$employee, ':leave']) }}";
                console.log(url)
                url = url.replace(':leave', Number(this.leave.id));

                axios.put(url, payload)
                    .then(response => {
                        console.log(response)
                        this.resetValues();
                        this.showLeaveModal = false;
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }

        },
        showModal: function () {
            this.resetValues();
            this.showLeaveModal = true;
        },
        updateLeave: function (leave) {
            // leave = JSON.parse(leave);

            this.leave = leave;

            this.employee_workplaces = this.employee_workplaces.filter(w => w.id == leave.workplace_id)
            this.submitType = this.submitTypes.update;

            this.leave_type_id = leave.leave_type_id;
            this.start_date = leave.start_date;
            this.end_date = leave.end_date;
            if (!Number.isNaN(leave.workplace_id)) {
                this.workplace_id.push(leave.workplace_id);
            }
            this.note = leave.note;
            this.showLeaveModal = true;
        },
        cancel: function () {
            this.resetValues();
            this.showLeaveModal = false;
        },
        resetValues: function () {
            this.employee_workplaces = this.employee_workplaces_list;
            this.leave_type_id = '';
            this.workplace_id = [];
            this.start_date = '';
            this.end_date = '';
            this.note = '';
            this.submitType = this.submitTypes.store;
            this.leave = null;
        },
        deleteLeave: function (leave) {
            leave = JSON.parse(leave)
            let url = "{{ route('employees.leaves.destroy', [$employee, ':leave']) }}";

            axios.delete(url.replace(':leave', leave.id))
                .then(response => {
                    console.log(response);
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error)
                });
        },







        onStatusChange: function (index, wplace) {
            console.log(wplace);
            this.popUpLoading();
            this.updateStatus(index, wplace);
        },
        updateStatus: function (index, workplace) {
            let url = "{{route('workplaces.updateStatus',':id')}}";
            url = url.replace(':id', workplace.id)

            const payload = {status: workplace.status ? 'inactive' : 'active'};
            console.log(workplace.status, payload);
            axios.put(url, payload)
                .then(response => {
                    setTimeout(() => {
                        console.log(response)
                        this.workplaces[index].status = response.data.status == 'active' ? true : false;
                        console.log(this.workplaces[index].status, response.data.status);
                        this.loading = false;
                    }, 2000)
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response?.data)
                    $('#error-alert .message').text(error.response.data.message)
                    $('#error-alert').show()
                    window.scroll(0, 0);
                });
        },
        popUpLoading: function () {
            this.loading = true;
        },
        // ============= GENERAL_FUNCTIONS END =============
















        // ============= STRING_PRETTIFING START =============
        getAddress(item){
            let address = '';
            if(item.country){
                address = item.country
            }

            if(item.state){
                address = address + ', ' +  item.state 
            }

            if(item.city){
                address = address  + ', ' + item.city
            }

            if(item.district){
                address = address  + ', ' + item.district
            }

            if(item.line){
                address = address  + ', ' + item.line
            }

            if(item.postal_code){
                address = address  + ', ' + item.postal_code
            }
            
            return address
        },
        getAcademicStatuses(array){
            let status = '';
            if(array.length != 0){
                array.forEach((elem, index) => {
                    if(index > 0){
                        status = status + ', ' + elem
                    }else{
                        status = elem
                    }
                })
            }else{
                status = '-'
            }
            return status
        },
        getWorkplacePositions(array){
            let positions;
            array.forEach((elem, index) => {
                if(index > 0){
                    positions = positions + ', ' + elem.position
                }else{
                    positions = elem.position
                }
            })
            return positions;
        },
        getWorkplaceDepartments(array){
            let departments;
            array.forEach((elem, index) => {
                if(index > 0){
                    departments = departments + ', ' + elem.department
                }else{
                    departments = elem.department
                }
            })
            return departments;
        },
        // ============= STRING_PRETTIFING END =============

        
        // popHierarchyParentId(){
        //     this.hierarchyParentId.pop()
        // },
        openinfo: function (item) {
            this.personDetails = item;
            this.isshow = true
        },
        openlist: function () {
            this.isshow = false
        },
        openinfo2: function (item) {
            this.personDetails2 = item;
            this.isshow2 = true
        },
        openlist2: function () {
            this.isshow2 = false
        },



        async getPrevOrganizationList(){
            this.page4--;
            await this.getOrganizationsList()
        },
        async getNextOrganizationList(){
            this.page4++;
            await this.getOrganizationsList()
        },









        
        // ==================== GET_LISTS START ====================
        async getOrganizationsList(search) {
            let params = {page: this.page4}
            if(search){
                params.search = search
            }
            await this.axios.get(`ajax/organizations`, {
                params: params,
            })
            .then((response) => {
                this.organizationsList = response.data.data
                this.page4 = response.data.current_page
                this.pageCount4 = response.data.last_page
            })
            .catch(error => {
                console.log(error)
            })
        },
        async getDepartmentsList() {
            await this.axios.get(`ajax/organizations/${this.filterBasic.organization_id}/departmentsAjax`)
                .then((response) => {
                    this.departmentsList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getPositionsList() {
            await this.axios.get(`ajax/organization-structures/${this.filterBasic.branch_id}/positions`)
                .then((response) => {
                    this.positionsList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        
        async getScientLevelsList() {
            await this.axios.get('ajax/scient-level')
                .then((response) => {
                    this.scientLevelsList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getSpecialitiesList() {
            await this.axios.get(`ajax/specialties?education_level_id=${this.filter.education_level_id}`)
                .then((response) => {
                    this.specialitiesList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getSpecialityCategoryTypesList() {
            await this.axios.get('ajax/specialty-category-types')
                .then((response) => {
                    this.specialityCategoryTypesList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getInstitutionsList() {
            await this.axios.get('ajax/institutions')
                .then((response) => {
                    this.institutionsList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getFacultiesList() {
            await this.axios.get(`ajax/faculties?institution_id=${this.filter.institution_id}`)
                .then((response) => {
                    this.facultiesList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getCategoriesList() {
            await this.axios.get('ajax/categories')
                .then((response) => {
                    this.categoriesList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getEducationLevelsList() {
            await this.axios.get('ajax/education-levels')
                .then((response) => {
                    this.educationLevelsList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getEducationTypesList() {
            await this.axios.get('ajax/education-type')
                .then((response) => {
                    this.educationTypesList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getIdentityCardTypesList() {
            await this.axios.get('ajax/identity-card-types')
                .then((response) => {
                    this.identityCardTypesList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getPartyTypesList() {
            await this.axios.get('ajax/political-party-types')
                .then((response) => {
                    this.partyTypesList = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getGovernmentAwardTypesList() {
            await this.axios.get('ajax/government-award-types')
                .then((response) => {
                    this.governmentAwardTypesList = response.data.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getLanguageList() {
            await this.axios.get('ajax/language-types')
                .then((response) => {
                    this.languageList = response.data.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getNationalitiesList() {
            await this.axios.get('ajax/nationalities')
                .then((response) => {
                    this.nationalitiesList = response.data.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getCountirsList() {
            await this.axios.get('ajax/all-countries')
                .then((response) => {
                    this.countriesList = response.data.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        // async getIdentitiesList() {
        //     await this.axios.get('ajax/identity-card-types')
        //         .then((response) => {
        //             this.languageList = response.data;
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // },


        // ==================== GET_LISTS END ====================
      
    }
}
</script>

<style>
.vue-treeselect__control {
    border-radius: 1rem;
    padding: .5rem 1rem !important;
    height: 2.5rem !important;
    border: 2px solid #a0a3bd !important;
    color: #1b1b1b !important;
    font-size: .875rem !important;
    box-shadow: none !important;
    transition: box-shadow .2s !important;
}

.vue-treeselect__placeholder{
    line-height: normal!important;
}

.vue-treeselect__placeholder .vue-treeselect-helper-zoom-effect-off,
.vue-treeselect__single-value {
    display: flex !important;
    text-align: center !important;
    line-height: normal !important;
}






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


@media (min-width: 576)and (max-width: 768) {
    .modal-container {
        width: 300px !important;
    }
}

@media (min-width: 769) and (max-width: 1024) {
    .modal-container {
        width: 500px !important;
    }
}

@media (min-width: 1024) {
    .modal-container {
        width: 700px !important;
    }
}

.status-loader {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 60%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
}

.loader-container {
    position: relative;
    left: calc(50% - 60px);
    right: calc(50% - 60px);
    top: calc(50% - 100px);
}


/* .table-actions{
    margin-top: 15px !important;
} */
/* .table-actions:first-child {
    margin-top: 0 !important;
} */
</style>