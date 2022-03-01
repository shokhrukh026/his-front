<template>
<div id="section1" class="header-tab-block">

    <div class="d-flex justify-space-between mb-4">
        <div class="d-flex">
            <h1 class="text-black fz-18rem">{{$t('users')}}</h1>
            <!-- @if (Auth::user()->hasPermissionTo('employees_create')) -->
            <a @click="openEmployeeAddModal()" class="btn btn-primary text-nowrap ml-3">
                <i class="fas fa-plus mr-2 fz-12px"></i> {{$t('add_employee')}}
            </a>
            <!-- @endif -->
        </div>
    </div>


    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="employees-tab" data-toggle="tab" href="#employees-tab-panel" role="tab"
                aria-controls="employees-tab-panel" aria-selected="true">Сотрудники</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="search-by-hierarchy-tab" data-toggle="tab" href="#search-by-hierarchy-panel"
                role="tab" aria-controls="search-by-hierarchy-panel" aria-selected="false">Поиск по иерархии</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="search-by-criteria-tab" data-toggle="tab" href="#search-by-criteria-panel"
                role="tab" aria-controls="search-by-criteria-panel" aria-selected="false">Поиск по критериям</a>
        </li>
    </ul>

    <div class="tab-content">

        <div class="tab-pane fade show active" id="employees-tab-panel" role="tabpanel" aria-labelledby="employees-tab">

            <div class="row">
                <!-- <form action="{{ route('employees.index') }}" @submit="onSubmit()" class="col-12"> -->
                <form @submit="onSubmit()" class="col-12">
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <input type="tel" data-inputmask-mask="99999999999999" class="form-control" name="pinfl"
                                    :placeholder="$t('pin')" v-model="filterBasic.pinfl">
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <input type="text" class="form-control" style="width:100%" name="firstname"
                                    :placeholder="$t('personName')" v-model="filterBasic.firstname">
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <input type="text" class="form-control" style="width:100%" name="lastname"
                                    :placeholder="$t('surname')" v-model="filterBasic.lastname">
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <input type="text" class="form-control" style="width:100%" name="middlename"
                                    :placeholder="$t('middle_name')" v-model="filterBasic.middlename">
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">

                                <input v-model="filterBasic.organization_id" name="organization_id" id="organization" style="display: none;">
                                <input v-model="filterBasic.branch_id" name="branch_id" id="branch" style="display: none;">
                                <input v-model="filterBasic.position_id" name="position_id" id="position" style="display: none;">
                                <input v-model="filterBasic.leave_type_id" name="leave_type_id" id="leave_type_id" style="display: none;">


                                <v-select :reduce="elem => elem.id" label="name_full" 
                                v-model="filterBasic.organization_id" :searchable="true"
                                :filterable="false" :options="organizationsList" @search="onOrganizationsSearch" 
                                class="form-control" :placeholder="$t('organizations')">
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
                        <div class="col-sm-6 col-lg-3 d-flex align-items-center">
                            <div class="form-group px-2">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" v-model="filterBasic.with_subdivisions"
                                     id="with_subdivisions" name="with_subdivisions">
                                    <label class="custom-control-label small" for="with_subdivisions">
                                        {{$t('with_subdivisions')}}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <!-- <multiselect :options="departmentsList" v-model="filterBasic.branch_id" class="form-control" :placeholder="$t('chamberTypes.branch')"></multiselect> -->
                                <v-select :reduce="elem => elem.id" label="name" 
                                v-model="filterBasic.branch_id"
                                :filterable="false" :options="departmentsList" 
                                class="form-control" :placeholder="$t('chamberTypes.branch')">
                                    <template #no-options>
                                        Нет результатов
                                    </template>
                                    <template #option>
                                        <div class="">
                                            {{ option.name }}
                                        </div>
                                    </template>
                                    <template #selected-option>
                                        <div class="selected">
                                            {{ option.name }}
                                        </div>
                                    </template>
                              
                                </v-select>
                                
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">

                                <v-select :reduce="elem => elem.id" label="name" 
                                v-model="filterBasic.position_id"
                                :filterable="false" :options="positionsList" 
                                class="form-control" :placeholder="$t('position')">

                                    <template #no-options>
                                        Нет результатов
                                    </template>
                                    <template #option>
                                        <div class="">
                                            {{ option.name }}
                                        </div>
                                    </template>
                                    <template #selected-option>
                                        <div class="selected">
                                            {{ option.name }}
                                        </div>
                                    </template>
                               
                                </v-select>
                                
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                             
                                <v-select :reduce="elem => elem.id" label="name" 
                                v-model="filterBasic.leave_type_id"
                                :filterable="false" :options="leaveTypeList"  
                                class="form-control" :placeholder="$t('leave_type')">

                                    <template #no-options>
                                        Нет результатов
                                    </template>
                                    <template #option>
                                        <div class="">
                                            {{ option.name }}
                                        </div>
                                    </template>
                                    <template #selected-option>
                                        <div class="selected">
                                            {{ option.name }}
                                        </div>
                                    </template>

                                </v-select>

                            </div>
                        </div>
                        <div class="col-2">
                            <button type="submit" class="btn btn-primary">
                                <i class="fa fa-filter mr-2 fz-12px"></i>{{$t('filter')}}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class="col-12" id="delete-modal">
                    <div class="delete-modal">
                        <!-- <modal v-if="showDeleteAlertModal" @close="showDeleteAlertModal=false">
                            <form id="modal-form" slot="modal-container" method="POST" :action="url">
                                @method('DELETE')
                                @csrf
                                <div class="" slot="header">
                                    <h4 class="modal-title mb-4">
                                        {{$t('delete_employee')}}
                                    </h4>
                                </div>

                                <div class="" slot="body">
                                    <div>
                                        <p>
                                            {{$t('do_you_really_want_to_delete_questionless')}} <span
                                                class="font-weight-bold">{{ employee . official_full_name }}</span>
                                        </p>
                                    </div>

                                </div>

                                <div class="d-flex justify-content-end" slot="footer">
                                    <button type="button" class="btn btn-light"
                                        v-on:click="showDeleteAlertModal=false">{{$t('cancel')}}</button>
                                    <button type="submit" class="btn btn-danger">{{$t('delete')}}</button>
                                </div>
                            </form>

                        </modal> -->
                    </div>
                    <div class="card box-shadow-none border-none">
                        <div class="table-responsive">
                            <table class="table table-striped table-sm mb-0">
                                <thead>
                                    <tr role="row">
                                        <th class="p-2">
                                            {{$t('full_name')}}
                                        </th>
                                        <th class="p-2">
                                            {{$t('organization')}}
                                        </th>
                                        <th class="p-2">
                                            {{$t('department')}}
                                        </th>
                                        <th class="p-2">
                                            {{$t('position')}}
                                        </th>
                                        <th class="p-2" width="1">
                                            {{$t('action')}}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- @foreach ($employees as $employee)
                                    @php
                                    $officialName = $employee->employeeNames()->first();
                                    $workplace = $employee->employeeWorkplaces()->first();
                                    $org = null;
                                    $dep = null;
                                    $position = null;
                                    if ($workplace) {
                                    $dep = $workplace->organizationStructure->department;
                                    $org = $workplace->organizationStructure->organization;
                                    $position = $workplace->organizationStructure->position;
                                    //if(!$dep){
                                    //$upperOrgId=App\Domain\Organization\Entities\OrganizationStructure::findUpperOrganization($workplace->organizationStructure);
                                    //$upperOrg=App\Domain\Organization\Entities\Organization::find($upperOrgId);
                                    //$dep=$upperOrg?$upperOrg->departmentAffiliation:null;
                                    //}
                                    }
                                    @endphp
                                    <tr>
                                        <td class="p-2">
                                            {{ $officialName->firstname }}&nbsp;{{ $officialName->lastname }}
                                            &nbsp;{{ $officialName->middlename }}
                                        </td>
                                        <td class="p-2">{{ $org ? $org->name_full : '-' }}</td>
                                        <td class="p-2">{{ $dep ? $dep->name : '-' }}</td>
                                        <td class="p-2">{{ $position ? $position->name : '-' }}</td>
                                        <td class="p-2 pr-3">
                                            <div class="d-flex justify-content-end">
                                                @if (auth()->user()->hasPermissionTo('employees_view'))
                                                <a class="btn btn-sm bg-success d-flex align-center"
                                                    href="{{ route('employees.show', $employee) }}">
                                                    <i class="fas fa-eye" style="color: white;"></i>
                                                </a>
                                                @endif
                                                @if (auth()->user()->hasPermissionTo('employees_edit'))
                                                <a class="btn btn-sm bg-info ml-2 d-flex align-center"
                                                    href="{{ route('employees.edit', $employee) }}">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </a>
                                                @endif
                                                @if (auth()->user()->hasPermissionTo('employees_delete'))
                                                <a class="btn btn-sm bg-danger ml-2 d-flex align-center"
                                                    href="javascript:void(0)"
                                                    data-employee="{{ $employee->official_full_name }}"
                                                    v-on:click="getEmployee($event, {{ $employee }})">
                                                    <i class="fas fa-trash-alt"></i>
                                                </a>
                                                @endif
                                            </div>
                                        </td>
                                    </tr>
                                    @endforeach -->
                                </tbody>
                            </table>
                        </div>
                        <div class="pagination-wrapper row align-items-center justify-content-between mx-0 pt-2">
                            <!-- <div class="col-auto">{{ $employees->links() }}</div>
                            <div class="col-auto mb-2 py-1 text-primary font-weight-bold">{{$t('total')}}
                                : {{ number_format($employees->total(), 0, '.', ' ') }}</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="tab-pane fade" id="search-by-hierarchy-panel" role="tabpanel"
            aria-labelledby="search-by-hierarchy-tab">

            <div class="main-block_inner">
                <div class="info-menu">
                    <ul class="info-menu__item" v-if="hierarchyList.data && hierarchyList.data.organization">
                        <li class="info-menu__item-text border-bottom-none" @click="backFilterButton()"
                            v-if="hierarchyList.data.organization">
                            <svg class="result__user_right__accordion__header__img" width="14" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 330 330"
                                style="enable-background:new 0 0 330 330; transform: rotate(90deg); margin: 0 5px 2px 0;"
                                xml:space="preserve">
                                <path id="XMLID_225_"
                                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                            </svg>
                            Назад
                        </li>

                        <li onclick="animateAccordion0()" id="accordionParent"
                            class="info-menu__item-text accordion__top" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                            v-if="hierarchyList.data.organization && hierarchyList.data.organization.name">
                            <div style="width: 90%; font-style: italic;">{{hierarchyList.data.organization.name}}</div>


                            <svg class="result__user_right__accordion__header__img svg_arrow" id="accordion_icon0"
                                width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
                                style="enable-background:new 0 0 330 330;" xml:space="preserve">
                                <path id="XMLID_225_"
                                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                            </svg>

                        </li>

                        <div id="collapseOne" class="accordion__bottom collapse show" data-parent="#accordionParent"
                            v-if="hierarchyList.data.organization && hierarchyList.data.organization.organization_structure">
                            <li class="info-menu__item-text"
                                v-for="(item1, index1) in hierarchyList.data.organization.organization_structure"
                                :key="index1" @click="applySearchByHierarchy(item1.id) && addDepartmentToBreadcrumb(item1.node.name)">{{item1.node.name}}
                            </li>
                        </div>
                    </ul>
                    <ul class="info-menu__item">
                        <div class="mt-2 mb-3">
                            <input type="text" class="form-control" style="width:100%" v-model="searchHierarchy" placeholder="Искать">
                        </div>

                        <div class="hierarchy__children">
                            <li class="info-menu__item-text" v-for="(item2, index2) in hierarchyList2" :key="index2"
                                @click="getHierarchy(item2.id, item2.name)">{{item2.name}}
                            </li>
                        </div>
                    </ul>
                </div>
                <div class="result">
                    <h3 class="result__title">
                        <template v-for="(item, index) in hierarchyListNames">
                            {{item}} 
                            {{index != (hierarchyListNames.length - 1) ? ' » ' : ''}}
                        </template>
                    </h3>
                    <div v-if="employeesList.length == 0 && !errorMessage" class="spinner__container">
                        <scale-loader :loading="loading" :color="color" :height="spinnerHeight" :width="spinnerWidth"></scale-loader>
                    </div>
                    <div v-if="errorMessage" class="spinner__container">
                        <h3 class="mb-4">Данные не найдены!</h3>
                    </div>
                    <div id="employees">

                        <div class="result-list" v-if="!isshow">
                            <div class="result-list__items d-flex align-start justify-space-between"
                                v-for="(item4, index) in employeesList" :key="index" @click="openinfo(item4)">
                                <div>
                                    <h5 class="result-list__items__profession">
                                        {{getWorkplacePositions(item4.workplaces)}}
                                    </h5>
                                    <h5 class="result-list__items__name">{{ item4.name }}</h5>
                                    <span class="result-list__items__experience">
                                        {{getWorkplaceDepartments(item4.workplaces)}}
                                    </span>
                                </div>

                                <div>
                                    <img :src="item4.img" alt="" class="result-list__items__img">
                                </div>
                            </div>
                        </div>
                        <paginate 
                            v-if="employeesList.length != 0 && !isshow"
                            :page-count="pageCount"
                            :page-range="9"
                            :prev-text="'Avvalgi'"
                            :next-text="'Keyingi'"
                            :container-class="'pagination_new'"
                            v-model="page"
                            :click-handler="getEmployees"
                            style="margin-top: 32px;"
                        >
                        </paginate>









                        <div class="result-user" v-if="isshow">
                            <span class="result-user-close-icon" @click="openlist">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.6665 18.0002L5.99983 7.3335C5.63539 6.96906 5.63539 6.36461 5.99983 6.00017C6.36428 5.63572 6.96873 5.63572 7.33317 6.00017L17.9999 16.6669C18.3643 17.0313 18.3643 17.6358 17.9999 18.0002C17.6354 18.3647 17.031 18.3647 16.6665 18.0002Z"
                                        fill="#223555" />
                                    <path
                                        d="M6.00012 18.0002C5.63568 17.6358 5.63568 17.0313 6.00012 16.6669L16.6668 6.00017C17.0313 5.63572 17.6357 5.63572 18.0002 6.00017C18.3646 6.36461 18.3646 6.96906 18.0002 7.3335L7.33346 18.0002C6.96902 18.3647 6.36457 18.3647 6.00012 18.0002Z"
                                        fill="#223555" />
                                </svg>
                            </span>
                            <div class="result__user">
                                <div class="result__user__left">
                                    <div class="result__user__left__inner">
                                        <div class="result__user__items">
                                            <h4 class="result__user__items__profession">
                                                {{getWorkplacePositions(personDetails.workplaces)}}
                                            </h4>
                                            <h3 class="result__user__items__name">{{personDetails.name ? personDetails.name : 'Ф.И.О.'}}</h3>
                                            <div class="result__user__items__bio">
                                                <div class="result__user__items__bio__block">
                                                    <span>ПИНФЛ</span>
                                                    <p>{{personDetails.pinfl ? personDetails.pinfl : '-'}}</p>
                                                </div>
                                                <div class="result__user__items__bio__block">
                                                    <span>Пол</span>
                                                    <p>{{personDetails.gender ? personDetails.gender : '-'}}</p>
                                                </div>
                                                <div class="result__user__items__bio__block">
                                                    <span>Национальность</span>
                                                    <p>{{personDetails.nationality ? personDetails.nationality : '-'}}</p>
                                                </div>
                                                <div class="result__user__items__bio__block">
                                                    <span>Дата рождения</span>
                                                    <p>{{$moment(personDetails.birth_date).format('DD-MM-YYYY')}}</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="result__user__image">
                                            <img style="object-fit: cover;" :src="APP_URL+ ':' + PORT + personDetails.photo"  alt="">
                                            <div class="overlay">
                                                <div class="text">Фото</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result__user__locations">
                                        <h4 class="result__user__locations__title">Место жительства</h4>
                                        <div class="result__user__locations__citizenship">
                                            <div class="result__user__locations__citizenship__state">
                                                <span>Место рождения</span>
                                                <p>{{personDetails.birth_place ? personDetails.birth_place : '-'}}</p>
                                            </div>
                                            <div class="result__user__locations__citizenship__state">
                                                <span>Гражданство</span>
                                                <p>{{personDetails.citizenship ? personDetails.citizenship : '-'}}</p>
                                            </div>
                                        </div>
                                        <div class="result__user__locations__place">
                                            <span>Адрес проживания</span>
                                            <p v-for="(item, index2) in personDetails.addresses" :key="index2">
                                                {{getAddress(item)}}
                                            </p>
                                            <!-- <p>{{personDetails.address ? personDetails.address : '-'}}</p> -->
                                        </div>
                                    </div>
                                    <div class="result__user__passport-info">
                                        <h4 class="result__user__locations__title">Паспортные данные</h4>
                                        <div v-for="(item, index) in personDetails.identity_cards" :key="index">
                                            <div class="result__user__locations__citizenship">
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Тип</span>
                                                    <p>{{item.type.name}}</p>
                                                </div>
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Серия и номер</span>
                                                    <p>{{item.number}}</p>
                                                </div>
                                            </div>
                                            <div class="result__user__locations__citizenship">
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Дата выдачи</span>
                                                    <p>{{$moment(item.start_date).format('DD-MM-YYYY')}}</p>
                                                </div>
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Срок действия</span>
                                                    <p>{{$moment(item.end_date).format('DD-MM-YYYY')}}</p>
                                                </div>
                                            </div>
                                            <div class="result__user__locations__place">
                                                <span>Кем выдан</span>
                                                <p>{{item.issuer}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result__user__locations">
                                        <h4 class="result__user__locations__title">Карьера</h4>
                                        <div class="result__user__locations__citizenship">
                                            <div class="result__user__locations__citizenship__state">
                                                <span>Партийность</span>
                                                <p>{{personDetails.political_party ? personDetails.political_party : '-' }}</p>
                                            </div>
                                        </div>
                                        <div class="result__user__locations__citizenship">
                                            <div class="result__user__locations__citizenship__state">
                                                <span>Гос награды</span>
                                                <p>{{getAcademicStatuses(personDetails.government_awards)}}</p>
                                            </div>
                                        </div>
                                        <div class="result__user__locations__citizenship">
                                            <div class="result__user__locations__citizenship__state">
                                                <span>Ученое звание</span>
                                                <p>{{getAcademicStatuses(personDetails.academic_statuses)}}</p>
                                            </div>
                                        </div>
                                        <div class="result__user__locations__place">
                                            <span>Языки</span>
                                            <p>{{getAcademicStatuses(personDetails.languages)}}</p>
                                        </div>
                                    </div>

                                    <div class="result__user__passport-info">
                                        <h4 class="result__user__locations__title">Контакты</h4>
                                        <div class="result__user__locations__citizenship" 
                                        v-for="(item, index) in personDetails.contacts" :key="index">
                                            <div class="result__user__locations__citizenship__state">
                                                <span>Тип</span>
                                                <p>{{item.use}}</p>
                                            </div>
                                            <div class="result__user__locations__citizenship__state">
                                                <span>{{item.type == 'phone' ? 'НОМЕР ТЕЛЕФОНА' : 'ЭЛЕКТРОННАЯ ПОЧТА'}}</span>
                                                <p>{{item.value}}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="result__user_right">
                                    <div class="result__user_right__accordion" id="accordion_block">

                                        <div class="result__user_right__accordion__header"
                                            onclick="animateAccordion('accordion_body1', 'accordion_icon1')">
                                            <span>Места работы</span>
                                            <!--  <img class="result__user_right__accordion__header__img" id="accordion_icon" src="./img/Stroke1.png" alt="">-->
                                            <svg class="result__user_right__accordion__header__img" id="accordion_icon1"
                                                width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                xml:space="preserve">
                                                <path id="XMLID_225_"
                                                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                            </svg>
                                        </div>
                                        <div class="result__user_right__accordion__body" id="accordion_body1">
                                            <div class="result__user_right__accordion__body__inner"
                                                v-for="(item, index) in personDetails.workplaces" :key="index">
                                                <div class="result__user_right__accordion__body__inner__item">
                                                    <h5 class="result-user__items__profession">
                                                        {{item.position}}</h5>
                                                    <h5 class="result-user__items__name">{{item.organization.name}}</h5>
                                                    <span class="result-user__items__experience">{{item.department}}</span>
                                                </div>
                                                <div class="result__user__locations__place ml-2">
                                                    <span class="user__items__experience">Начало работы</span>
                                                    <p>{{item.start_date}}</p>
                                                </div>
                                            </div>

                                            <hr v-if="personDetails.previous_workplaces.length != 0">

                                            <div class="result__user_right__accordion__body__inner"
                                                v-for="(item, index) in personDetails.previous_workplaces" :key="index">
                                                <div class="result__user_right__accordion__body__inner__item">
                                                    <h5 class="result-user__items__profession">
                                                        {{item.position}}</h5>
                                                    <h5 class="result-user__items__name">{{item.organization}}</h5>
                                                    <span class="result-user__items__experience">{{item.department}}</span>
                                                </div>
                                                <div class="result__user__locations__place ml-2">
                                                    <span>Период работы</span>
                                                    <p>{{item.start_date}} - {{item.end_date}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="result__user_right__accordion__header"
                                            onclick="animateAccordion('accordion_body3', 'accordion_icon3')">
                                            <span>Родственники</span>

                                            <svg class="result__user_right__accordion__header__img" id="accordion_icon3"
                                                width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                xml:space="preserve">
                                                <path id="XMLID_225_"
                                                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                            </svg>
                                        </div>
                                        <div class="result__user_right__accordion__body" id="accordion_body3">
                                            <div class="result__user_right__accordion__body__inner"
                                                v-for="(item, index) in personDetails.relatives" :key="index">
                                                <div class="result__user_right__accordion__body__inner__item">
                                                    <h5 class="result-user__items__profession">
                                                        {{item.relativity_type}}
                                                    </h5>
                                                    <h5 class="result-user__items__name mb-3">{{item.full_name}}</h5>
                                                    <h5 class="result-user__items__experience">{{item.birth_info}}</h5>
                                                    <h5 class="result-user__items__experience">{{item.workplace_and_position}}</h5>
                                                    <span class="result-user__items__experience">{{item.address}}</span>
                                                </div>
                                                <!-- <div class="result__user_right__accordion__body__inner__item">
                                                    <h5 class="result-user__items__profession">
                                                        {{item.relativity_type}}: 
                                                        {{item.full_name}}
                                                    </h5>
                                                    <h5 class="result-user__items__name">Год и место рождения: {{item.birth_info}}</h5>
                                                    <h5 class="result-user__items__name">Рабочее место и должность: {{item.workplace_and_position}}</h5>
                                                    <span class="result-user__items__experience">Адрес: {{item.address}}</span>
                                                </div> -->
                                                <!-- <div class="result__user__locations__place ml-2">
                                                    <span>ПЕРИОД РАБОТЫ</span>
                                                    <p>{{item.start_date}} - {{item.end_date}}</p>
                                                </div> -->
                                            </div>
                                        </div>

                                        <div class="result__user_right__accordion__header"
                                            onclick="animateAccordion('accordion_body4', 'accordion_icon4')">
                                            <span>Образование</span>
                                            <!--                    <img class="result__user_right__accordion__header__img" id="accordion_icon" src="./img/Stroke1.png" alt="">-->
                                            <svg class="result__user_right__accordion__header__img" id="accordion_icon4"
                                                width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                xml:space="preserve">
                                                <path id="XMLID_225_"
                                                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                            </svg>
                                        </div>
                                        <div class="result__user_right__accordion__body" id="accordion_body4">
                                            <div class="result__user_right__accordion__body__inner"
                                                v-for="(item, index) in personDetails.education_diplomas" :key="index">
                                                <div class="result__user_right__accordion__body__inner__item">
                                                    <h5 class="result-user__items__profession">
                                                        {{item.education_level.name}}</h5>
                                                    <h5 class="result-user__items__name">{{item.institution}}</h5>
                                                    <span class="result-user__items__name">Номер: {{item.number}}</span> <br>
                                                    <span class="result-user__items__name">Дата получения диплома: {{item.issued_date}}</span>
                                                </div>
                                                <div class="result__user__locations__place ml-2">
                                                    <span>ПЕРИОД УЧЕБЫ</span>
                                                    <p>{{item.start_date}} - {{item.end_date}}</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="result__user_right__accordion__header"
                                            onclick="animateAccordion('accordion_body5', 'accordion_icon5')">
                                            <span>Категория</span>
                                            <svg class="result__user_right__accordion__header__img" id="accordion_icon5"
                                                width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                xml:space="preserve">
                                                <path id="XMLID_225_"
                                                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                            </svg>
                                        </div>
                                        <div class="result__user_right__accordion__body" id="accordion_body5">
                                            <div class="result__user_right__accordion__body__inner"
                                                v-for="(item, index) in personDetails.categories" :key="index">
                                                <div class="result__user_right__accordion__body__inner__item">
                                                    <h5 class="result-user__items__profession">
                                                        {{item.name}}</h5>
                                                    <h5 class="result-user__items__name">{{item.category}}</h5>
                                                    <h5 class="result-user__items__name">{{item.certificate_number}}</h5>
                                                    <h5 class="result-user__items__name">{{item.category_type}}</h5>
                                                </div>
                                            </div>
                                        </div>


                                        <!-- <div class="result__user_right__accordion__header"
                                            onclick="animateAccordion6()">
                                            <span>Контакты</span>
                                            <svg class="result__user_right__accordion__header__img" id="accordion_icon6"
                                                width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                xml:space="preserve">
                                                <path id="XMLID_225_"
                                                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                            </svg>
                                        </div>
                                        <div class="result__user_right__accordion__body" id="accordion_body6">
                                            <div class="result__user_right__accordion__body__inner"
                                                v-for="(item, index) in personDetails.contacts">
                                                <div class="result__user_right__accordion__body__inner__item">
                                                    <h5 class="result-user__items__profession">
                                                    {{item.type == 'phone' ? 'Тип: ' : ''}}  {{item.use}}</h5>
                                                    <h5 class="result-user__items__name">{{item.value}}</h5>
                                                </div>
                                            </div>
                                        </div> -->

                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>



        <div class="tab-pane fade" id="search-by-criteria-panel" role="tabpanel"
            aria-labelledby="search-by-criteria-tab">

            <div class="main-block_inner">
                <div class="info-menu">
                    <ul class="info-menu__item filter-left-bar">
                        <li>
                            <label>
                                <input v-model="filterRadio" type="radio" value="basicInfo">
                                <span>Основные данные</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input v-model="filterRadio" type="radio" value="passportData">
                                <span>Паспортные данные</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input v-model="filterRadio" type="radio" value="education">
                                <span>Образование</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input v-model="filterRadio" type="radio" value="profession">
                                <span>Профессия</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input v-model="filterRadio" type="radio" value="other">
                                <span>Прочее</span>
                            </label>
                        </li>
                        <hr class="my-2">
                        <li>
                            <label>
                                <input v-model="filterRadio" type="radio" value="results">
                                <span>Результаты поиска</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="result">
                    <div class="card filter-card" v-if="filterRadio != 'results'">
                        <div class="filter-inputs">

                            <!-- =============== FILTER_BY_BASIC_INFO START =============== -->
                            <input v-model="filter.pinfl" v-if="filterRadio == 'basicInfo'" type="text" placeholder="ПИНФЛ" class="form-control">
                            <input v-model="filter.firstname" v-if="filterRadio == 'basicInfo'" type="text" placeholder="Имя" class="form-control">
                            <input v-model="filter.lastname" v-if="filterRadio == 'basicInfo'" type="text" placeholder="Фамилия" class="form-control">
                            <input v-model="filter.middlename" v-if="filterRadio == 'basicInfo'" type="text" placeholder="Отчество" class="form-control">

                            <v-select :options="genderList" :reduce="elem => elem.value" label="name" value="value" :placeholder="$t('userGender')"
                            v-if="filterRadio == 'basicInfo'" v-model="filter.gender" class="form-control"></v-select>

                            <input v-model="filter.birth_date" v-if="filterRadio == 'basicInfo'" type="date" placeholder="Дата рождения" class="form-control">

                            
                            <v-select :options="nationalitiesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('nationality')"
                            v-if="filterRadio == 'basicInfo'" v-model="filter.nationality_id" class="form-control"></v-select>

                            <v-select :options="countriesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('citizenship')"
                            v-if="filterRadio == 'basicInfo'" v-model="filter.citizenship_id" class="form-control"></v-select>

                            <v-select :options="countriesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('birth_country')"
                            v-if="filterRadio == 'basicInfo'" v-model="filter.birth_country_id" class="form-control"></v-select>


                            <input v-model="filter.birth_place" v-if="filterRadio == 'basicInfo'" type="text" placeholder="Место рождения" class="form-control">
                            <input v-model="filter.phone" v-if="filterRadio == 'basicInfo'" type="text" placeholder="Номер телефона" class="form-control">
                            <input v-model="filter.email" v-if="filterRadio == 'basicInfo'" type="text" placeholder="Электронная почта" class="form-control">
                            <!-- =============== FILTER_BY_BASIC_INFO END =============== -->

                           





                            <!-- =============== FILTER_BY_PASSPORT START =============== -->
                            <v-select :options="identityCardTypesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('passport_type')"
                            v-if="filterRadio == 'passportData'" v-model="filter.identity_card_type_id" class="form-control"></v-select>

                            <input v-if="filterRadio == 'passportData'" v-model="filter.identity_card_given" type="text" placeholder="Кем выдан">
                            <input v-if="filterRadio == 'passportData'" v-model="filter.identity_card_number" type="text" placeholder="Серия и номер" class="form-control">
                            <input v-if="filterRadio == 'passportData'" v-model="filter.start_date" type="date" placeholder="Дата выдачи" class="form-control">
                            <input v-if="filterRadio == 'passportData'" v-model="filter.end_date" type="date" placeholder="Срок действия" class="form-control">
                            <!-- =============== FILTER_BY_PASSPORT END =============== -->





                            
                            <!-- =============== FILTER_BY_EDUCATION START =============== -->
                            <v-select :options="educationTypesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('education_type')"
                            v-if="filterRadio == 'education'" v-model="filter.education_type" class="form-control"></v-select>

                            <v-select :options="institutionsList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('educational_organization')"
                            v-if="filterRadio == 'education'" v-model="filter.institution_id" class="form-control"></v-select>

                            <v-select :options="educationLevelsList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('education_degree')"
                            v-if="filterRadio == 'education'" v-model="filter.education_level_id" class="form-control"></v-select>

                            <v-select :options="specialitiesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('specialty')"
                            v-if="filterRadio == 'education'" v-model="filter.specialty_id" class="form-control"></v-select>

                            <v-select :options="facultiesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('faculty')"
                            v-if="filterRadio == 'education'" v-model="filter.faculty_id" class="form-control"></v-select>

                            <input v-model="filter.begin_year" v-if="filterRadio == 'education'" type="date" placeholder="Год вступления" class="form-control"> 
                            <input v-model="filter.diploma_number" v-if="filterRadio == 'education'" type="text" placeholder="Номер диплома" class="form-control">
                            <input v-model="filter.end_year" v-if="filterRadio == 'education'" type="date" placeholder="Год окончания" class="form-control"> 
                            <!-- =============== FILTER_BY_EDUCATION END =============== -->





                            <!-- =============== FILTER_BY_PROFESSION START =============== -->
                            <v-select :options="categoriesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('category_type')"
                            v-if="filterRadio == 'profession'" v-model="filter.category_id" class="form-control"></v-select>

                            <v-select :options="specialityCategoryTypesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('specialty')"
                            v-if="filterRadio == 'profession'" v-model="filter.speciality_category_type_id" class="form-control"></v-select>
                            

                            <input v-model="filter.diploma_given_date" v-if="filterRadio == 'profession'" type="date" placeholder="Год получения" class="form-control">
                            <!-- =============== FILTER_BY_PROFESSION START =============== -->






                            <!-- =============== FILTER_BY_OTHERS START =============== -->
                            <v-select :options="scientLevelsList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('scient_degree')"
                            v-if="filterRadio == 'other'" v-model="otherForm.scient_level_id" class="form-control"></v-select>

                            <v-select :options="partyTypesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('party_membership')"
                            v-if="filterRadio == 'other'" v-model="otherForm.political_party_type_id" class="form-control"></v-select>

                            <v-select :options="governmentAwardTypesList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('government_award')"
                            v-if="filterRadio == 'other'" v-model="otherForm.government_award_type_id" class="form-control"></v-select>

                            <v-select :options="languageList" :reduce="elem => elem.id" label="name" value="id" :placeholder="$t('language')"
                            v-if="filterRadio == 'other'" v-model="otherForm.language_type_id" class="form-control"></v-select>
                            <!-- =============== FILTER_BY_OTHERS END =============== -->


                            
                        </div>
                        <div class="filter-inputs mt-3">
                            <button @click="applyFilters()" class="btn btn-primary d-flex align-center justify-center">
                                <span>{{$t('apply')}}</span>
                            </button>
                        </div>
                    </div>





                    <div v-else>
                        <!-- <h3 class="result__title">Организация » Суборганизация » Разделение » Подразделение</h3> -->
                        <div v-if="employeesList2.length == 0 && !errorMessage2" class="spinner__container">
                            <scale-loader :loading="loading2" :color="color" :height="spinnerHeight" :width="spinnerWidth"></scale-loader>
                        </div>
                        <div v-if="errorMessage2" class="spinner__container">
                            <h3 class="mb-4">Данные не найдены!</h3>
                        </div>
                        <div id="employees" v-else>

                            <div class="result-list" v-if="!isshow2">
                                <div class="result-list__items d-flex align-start justify-space-between"
                                    v-for="(item4, index) in employeesList2" :key="index" @click="openinfo2(item4)">
                                    <div>
                                        <h5 class="result-list__items__profession">
                                            {{getWorkplacePositions(item4.workplaces)}}
                                        </h5>
                                        <h5 class="result-list__items__name">{{ item4.name }}</h5>
                                        <span class="result-list__items__experience">
                                            {{getWorkplaceDepartments(item4.workplaces)}}
                                        </span>
                                    </div>

                                    <div>
                                        <img :src="item4.img" alt="" class="result-list__items__img">
                                    </div>
                                </div>

                            </div>
                            <paginate 
                            v-if="employeesList2.length != 0 && !isshow2"
                            :page-count="pageCount2"
                            :page-range="9"
                            :prev-text="'Avvalgi'"
                            :next-text="'Keyingi'"
                            :container-class="'pagination_new'"
                            v-model="page2"
                            :click-handler="getFilteredEmployees"
                            style="margin-top: 32px;"
                            >
                            </paginate>









                            <div class="result-user" v-if="isshow2">
                                <span class="result-user-close-icon" @click="openlist2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.6665 18.0002L5.99983 7.3335C5.63539 6.96906 5.63539 6.36461 5.99983 6.00017C6.36428 5.63572 6.96873 5.63572 7.33317 6.00017L17.9999 16.6669C18.3643 17.0313 18.3643 17.6358 17.9999 18.0002C17.6354 18.3647 17.031 18.3647 16.6665 18.0002Z"
                                            fill="#223555" />
                                        <path
                                            d="M6.00012 18.0002C5.63568 17.6358 5.63568 17.0313 6.00012 16.6669L16.6668 6.00017C17.0313 5.63572 17.6357 5.63572 18.0002 6.00017C18.3646 6.36461 18.3646 6.96906 18.0002 7.3335L7.33346 18.0002C6.96902 18.3647 6.36457 18.3647 6.00012 18.0002Z"
                                            fill="#223555" />
                                    </svg>
                                </span>
                                <div class="result__user">
                                    <div class="result__user__left">
                                        <div class="result__user__left__inner">
                                            <div class="result__user__items">
                                                <h4 class="result__user__items__profession">
                                                    {{getWorkplacePositions(personDetails2.workplaces)}}
                                                </h4>
                                                <h3 class="result__user__items__name">{{personDetails2.name ? personDetails2.name : 'Ф.И.О.'}}</h3>
                                                <div class="result__user__items__bio">
                                                    <div class="result__user__items__bio__block">
                                                        <span>ПИНФЛ</span>
                                                        <p>{{personDetails2.pinfl ? personDetails2.pinfl : '-'}}</p>
                                                    </div>
                                                    <div class="result__user__items__bio__block">
                                                        <span>Пол</span>
                                                        <p>{{personDetails2.gender ? personDetails2.gender : '-'}}</p>
                                                    </div>
                                                    <div class="result__user__items__bio__block">
                                                        <span>Национальность</span>
                                                        <p>{{personDetails2.nationality ? personDetails2.nationality : '-'}}</p>
                                                    </div>
                                                    <div class="result__user__items__bio__block">
                                                        <span>Дата рождения</span>
                                                        <p>{{$moment(personDetails2.birth_date).format('DD-MM-YYYY')}}</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="result__user__image">
                                                <img style="object-fit: cover;" :src="APP_URL+ ':' + PORT + personDetails2.photo"  alt="">
                                                <div class="overlay">
                                                    <div class="text">Фото</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="result__user__locations">
                                            <h4 class="result__user__locations__title">Место жительства</h4>
                                            <div class="result__user__locations__citizenship">
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Место рождения</span>
                                                    <p>{{personDetails2.birth_place ? personDetails2.birth_place : '-'}}</p>
                                                </div>
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Гражданство</span>
                                                    <p>{{personDetails2.citizenship ? personDetails2.citizenship : '-'}}</p>
                                                </div>
                                            </div>
                                            <div class="result__user__locations__place">
                                                <span>Адрес проживания</span>
                                                <p v-for="(item, index2) in personDetails2.addresses" :key="index2">
                                                    {{getAddress(item)}}
                                                </p>
                                                <!-- <p>{{personDetails2.address ? personDetails2.address : '-'}}</p> -->
                                            </div>
                                        </div>
                                        <div class="result__user__passport-info">
                                            <h4 class="result__user__locations__title">Паспортные данные</h4>
                                            <div v-for="(item, index) in personDetails2.identity_cards" :key="index">
                                                <div class="result__user__locations__citizenship">
                                                    <div class="result__user__locations__citizenship__state">
                                                        <span>Тип</span>
                                                        <p>{{item.type.name}}</p>
                                                    </div>
                                                    <div class="result__user__locations__citizenship__state">
                                                        <span>Серия и номер</span>
                                                        <p>{{item.number}}</p>
                                                    </div>
                                                </div>
                                                <div class="result__user__locations__citizenship">
                                                    <div class="result__user__locations__citizenship__state">
                                                        <span>Дата выдачи</span>
                                                        <p>{{$moment(item.start_date).format('DD-MM-YYYY')}}</p>
                                                    </div>
                                                    <div class="result__user__locations__citizenship__state">
                                                        <span>Срок действия</span>
                                                        <p>{{$moment(item.end_date).format('DD-MM-YYYY')}}</p>
                                                    </div>
                                                </div>
                                                <div class="result__user__locations__place">
                                                    <span>Кем выдан</span>
                                                    <p>{{item.issuer}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="result__user__locations">
                                            <h4 class="result__user__locations__title">Карьера</h4>
                                            <div class="result__user__locations__citizenship">
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Партийность</span>
                                                    <p>{{personDetails2.political_party ? personDetails2.political_party : '-' }}</p>
                                                </div>
                                            </div>
                                            <div class="result__user__locations__citizenship">
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Гос награды</span>
                                                    <p>{{getAcademicStatuses(personDetails2.government_awards)}}</p>
                                                </div>
                                            </div>
                                            <div class="result__user__locations__citizenship">
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Ученое звание</span>
                                                    <p>{{getAcademicStatuses(personDetails2.academic_statuses)}}</p>
                                                </div>
                                            </div>
                                            <div class="result__user__locations__place">
                                                <span>Языки</span>
                                                <p>{{getAcademicStatuses(personDetails2.languages)}}</p>
                                            </div>
                                        </div>

                                        <div class="result__user__passport-info">
                                            <h4 class="result__user__locations__title">Контакты</h4>
                                            <div class="result__user__locations__citizenship" 
                                            v-for="(item, index) in personDetails2.contacts" :key="index">
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>Тип</span>
                                                    <p>{{item.use}}</p>
                                                </div>
                                                <div class="result__user__locations__citizenship__state">
                                                    <span>{{item.type == 'phone' ? 'НОМЕР ТЕЛЕФОНА' : 'ЭЛЕКТРОННАЯ ПОЧТА'}}</span>
                                                    <p>{{item.value}}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="result__user_right">
                                        <div class="result__user_right__accordion" id="accordion_block">

                                            <div class="result__user_right__accordion__header"
                                                onclick="animateAccordion('accordion_body7', 'accordion_icon7')">
                                                <span>Места работы</span>
                                                <!--  <img class="result__user_right__accordion__header__img" id="accordion_icon" src="./img/Stroke1.png" alt="">-->
                                                <svg class="result__user_right__accordion__header__img" id="accordion_icon7"
                                                    width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                    xml:space="preserve">
                                                    <path id="XMLID_225_"
                                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                                </svg>
                                            </div>
                                            <div class="result__user_right__accordion__body" id="accordion_body7">
                                                <div class="result__user_right__accordion__body__inner"
                                                    v-for="(item, index) in personDetails2.workplaces" :key="index">
                                                    <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                            {{item.position}}</h5>
                                                        <h5 class="result-user__items__name">{{item.organization.name}}</h5>
                                                        <span class="result-user__items__experience">{{item.department}}</span>
                                                    </div>
                                                    <div class="result__user__locations__place ml-2">
                                                        <span class="user__items__experience">Начало работы</span>
                                                        <p>{{item.start_date}}</p>
                                                    </div>
                                                </div>

                                                <hr v-if="personDetails2.previous_workplaces.length != 0">

                                                <div class="result__user_right__accordion__body__inner"
                                                    v-for="(item, index) in personDetails2.previous_workplaces" :key="index">
                                                    <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                            {{item.position}}</h5>
                                                        <h5 class="result-user__items__name">{{item.organization}}</h5>
                                                        <span class="result-user__items__experience">{{item.department}}</span>
                                                    </div>
                                                    <div class="result__user__locations__place ml-2">
                                                        <span>Период работы</span>
                                                        <p>{{item.start_date}} - {{item.end_date}}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- <div class="result__user_right__accordion__header"
                                                onclick="animateAccordion2()">
                                                <span>Преыдущие места работы</span>
                                                <svg class="result__user_right__accordion__header__img" id="accordion_icon2"
                                                    width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                    xml:space="preserve">
                                                    <path id="XMLID_225_"
                                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                                </svg>
                                            </div>
                                            <div class="result__user_right__accordion__body" id="accordion_body2">
                                                <div class="result__user_right__accordion__body__inner"
                                                    v-for="(item, index) in personDetails2.previous_workplaces">
                                                    <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                            {{item.position}}</h5>
                                                        <h5 class="result-user__items__name">{{item.organization}}</h5>
                                                        <span class="result-user__items__experience">{{item.department}}</span>
                                                    </div>
                                                    <div class="result__user__locations__place ml-2">
                                                        <span>ПЕРИОД РАБОТЫ</span>
                                                        <p>{{item.start_date}} - {{item.end_date}}</p>
                                                    </div>
                                                </div>
                                            </div> -->
                                            
                                            <div class="result__user_right__accordion__header"
                                                onclick="animateAccordion('accordion_body8', 'accordion_icon8')">
                                                <span>Родственники</span>
                                                <!-- <img class="result__user_right__accordion__header__img" id="accordion_icon" src="./img/Stroke1.png" alt=""> -->
                                                <svg class="result__user_right__accordion__header__img" id="accordion_icon8"
                                                    width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                    xml:space="preserve">
                                                    <path id="XMLID_225_"
                                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                                </svg>
                                            </div>
                                            <div class="result__user_right__accordion__body" id="accordion_body8">
                                                <div class="result__user_right__accordion__body__inner"
                                                    v-for="(item, index) in personDetails2.relatives" :key="index">
                                                    <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                            {{item.relativity_type}}
                                                        </h5>
                                                        <h5 class="result-user__items__name mb-3">{{item.full_name}}</h5>
                                                        <h5 class="result-user__items__experience">{{item.birth_info}}</h5>
                                                        <h5 class="result-user__items__experience">{{item.workplace_and_position}}</h5>
                                                        <span class="result-user__items__experience">{{item.address}}</span>
                                                    </div>
                                                    <!-- <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                            {{item.relativity_type}}: 
                                                            {{item.full_name}}
                                                        </h5>
                                                        <h5 class="result-user__items__name">Год и место рождения: {{item.birth_info}}</h5>
                                                        <h5 class="result-user__items__name">Рабочее место и должность: {{item.workplace_and_position}}</h5>
                                                        <span class="result-user__items__experience">Адрес: {{item.address}}</span>
                                                    </div> -->
                                                    <!-- <div class="result__user__locations__place ml-2">
                                                        <span>ПЕРИОД РАБОТЫ</span>
                                                        <p>{{item.start_date}} - {{item.end_date}}</p>
                                                    </div> -->
                                                </div>
                                            </div>

                                            <div class="result__user_right__accordion__header"
                                                onclick="animateAccordion('accordion_body9', 'accordion_icon9')">
                                                <span>Образование</span>
                                                <!--                    <img class="result__user_right__accordion__header__img" id="accordion_icon" src="./img/Stroke1.png" alt="">-->
                                                <svg class="result__user_right__accordion__header__img" id="accordion_icon9"
                                                    width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                    xml:space="preserve">
                                                    <path id="XMLID_225_"
                                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                                </svg>
                                            </div>
                                            <div class="result__user_right__accordion__body" id="accordion_body9">
                                                <div class="result__user_right__accordion__body__inner"
                                                    v-for="(item, index) in personDetails2.education_diplomas" :key="index">
                                                    <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                            {{item.education_level.name}}</h5>
                                                        <h5 class="result-user__items__name">{{item.institution}}</h5>
                                                        <span class="result-user__items__name">Номер: {{item.number}}</span> <br>
                                                        <span class="result-user__items__name">Дата получения диплома: {{item.issued_date}}</span>
                                                    </div>
                                                    <div class="result__user__locations__place ml-2">
                                                        <span>ПЕРИОД УЧЕБЫ</span>
                                                        <p>{{item.start_date}} - {{item.end_date}}</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="result__user_right__accordion__header"
                                                onclick="animateAccordion('accordion_body10', 'accordion_icon10')">
                                                <span>Категория</span>
                                                <!--                    <img class="result__user_right__accordion__header__img" id="accordion_icon" src="./img/Stroke1.png" alt="">-->
                                                <svg class="result__user_right__accordion__header__img" id="accordion_icon10"
                                                    width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                    xml:space="preserve">
                                                    <path id="XMLID_225_"
                                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                                </svg>
                                            </div>
                                            <div class="result__user_right__accordion__body" id="accordion_body10">
                                                <div class="result__user_right__accordion__body__inner"
                                                    v-for="(item, index) in personDetails2.categories" :key="index">
                                                    <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                            {{item.name}}</h5>
                                                        <h5 class="result-user__items__name">{{item.category}}</h5>
                                                        <h5 class="result-user__items__name">{{item.certificate_number}}</h5>
                                                        <h5 class="result-user__items__name">{{item.category_type}}</h5>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- <div class="result__user_right__accordion__header"
                                                onclick="animateAccordion6()">
                                                <span>Контакты</span>
                                                <svg class="result__user_right__accordion__header__img" id="accordion_icon6"
                                                    width="14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                    xml:space="preserve">
                                                    <path id="XMLID_225_"
                                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                                </svg>
                                            </div>
                                            <div class="result__user_right__accordion__body" id="accordion_body6">
                                                <div class="result__user_right__accordion__body__inner"
                                                    v-for="(item, index) in personDetails2.contacts">
                                                    <div class="result__user_right__accordion__body__inner__item">
                                                        <h5 class="result-user__items__profession">
                                                        {{item.type == 'phone' ? 'Тип: ' : ''}}  {{item.use}}</h5>
                                                        <h5 class="result-user__items__name">{{item.value}}</h5>
                                                    </div>
                                                </div>
                                            </div> -->

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>





















    
    


                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <DialogAddEmployee :showModal="showModal"></DialogAddEmployee>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import DialogAddEmployee from './DialogAddEmployee.vue'
export default {
    components: {
        Multiselect,
        DialogAddEmployee 
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
            otherForm: {
                scient_level_id: '',
                political_party_type_id: '',
                government_award_type_id: '',
                language_type_id: '',
            },
            filterBasic: {
                pinfl: '',
                firstname: '',
                lastname: '',
                middlename: '',
                organization_id: '',
                branch_id: '',
                leave_type_id: '',
                with_subdivisions: false,
            },
            filter: {
                pinfl: '',
                lastname: '',
                firstname: '',
                middlename: '',
                birth_date: '',
                nationality_id: '',
                citizenship_id: '',
                birth_country_id: '',
                birth_place: '',
                gender: '',
                phone: '',
                email: '',



                identity_card_type_id: '',
                // identity_card_given: '',
                identity_card_number: '',
                start_date: '',
                end_date: '',



                education_type: '',
                education_level_id: '',
                institution_id: '',
                diploma_number: '',
                specialty_id: '',
                faculty_id: '',
                begin_year: '',
                end_year: '',

                category_id: '',
                speciality_category_type_id: '',
            },
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
        
        await this.getHierarchy(0);

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
        openEmployeeAddModal(){
            $('#addEmployeeModal').modal('toggle');
        },






        // ============= GENERAL_FUNCTIONS START =============
        addDepartmentToBreadcrumb(item){
            if(this.departmentInBreadcrumbExist){
                this.hierarchyListNames.pop();
            }
            this.departmentInBreadcrumb = true;
            this.departmentInBreadcrumbExist = true;
            this.hierarchyListNames.push(item);
        },
        async applySearchByHierarchy(id){
            this.page = 1;
            this.employeesList = [];
            if(id){
                this.organizationStructureId = id
            }
            this.isshow = false;
            await this.getEmployees(id);
        },
        async getEmployees(){
            this.loading = true;
            this.errorMessage = false
            await this.axios.get(`ajax/organization-structure/${this.organizationStructureId}/employees?page=${this.page}`)
                .then((response) => {
                    if(response.data.data.length != 0){
                        this.employeesList = response.data.data
                        this.page = response.data.meta.current_page
                        this.pageCount = response.data.meta.last_page
                    }else{
                        this.errorMessage = true
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            this.loading = false;
        },
        async applyFilters(){
            this.page2 = 1;
            this.employeesList2 = []
            await this.getFilteredEmployees();
        },
        async onSubmit(){
            sessionStorage.setItem("employeeFilters", JSON.stringify(this.filterBasic));
        },
        async getFilteredEmployees(){
            this.loading2 = true;
            this.errorMessage2 = false
            this.filterRadio = 'results';
            await this.axios.get(`ajax/employees`, {
                params: { ...this.filter, ...this.otherForm, page: this.page2}
            })
            .then((response) => {
                if(response.data.data.length != 0){
                    this.employeesList2 = response.data.data
                    this.page2 = response.data.meta.current_page
                    this.pageCount2 = response.data.meta.last_page
                }else{
                    this.errorMessage2 = true
                }
            })
            .catch(error => {
                console.log(error)
            })
            this.loading2 = false;
        },
        async backFilterButton(){
            await this.getHierarchy(this.hierarchyParentId[this.hierarchyParentId.length - 1])
            this.hierarchyParentId.pop()
            this.hierarchyParentId.pop()

            if(this.departmentInBreadcrumb){
                this.hierarchyListNames.pop();
                this.departmentInBreadcrumb = false;
            }
            this.hierarchyListNames.pop();
            this.departmentInBreadcrumbExist = false;

            this.errorMessage = false;
        },
        async getHierarchy(id, name) {
            this.loading = true;
            await this.axios.get('ajax/hierarchy?organization_id=' + id)
                .then((response) => {
                    this.hierarchyList = response.data
                    this.hierarchyList2 = this.hierarchyList.data.children

                    if(name){
                        this.hierarchyListNames.push(name);
                    }
                    this.hierarchyParentId.push(this.hierarchyId);
                    this.hierarchyId = id;
                })
                .catch(error => {
                    console.log(error)
                })
            this.loading = false;
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

</style>