<template>
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

                <div class="col-2">
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
            <div class="card">
                <div class="table-responsive">
                    <table class="table table-striped table-sm mb-0">
                        <thead>
                            <tr role="row">
                                <th class="pl-3 py-2">
                                    {{$t('identification_code')}}
                                </th>
                                <th class="pl-3 py-2">
                                    {{$t('name_full')}}
                                </th>
                                <th class="pl-3 py-2">
                                    {{$t('parent_organization')}}
                                </th>
                                <th class="pl-3 py-2">
                                    {{$t('type')}}
                                </th>
                                <th class="pl-3 py-2">
                                    {{$t('level')}}
                                </th>
                                <th class="pl-3 py-2">
                                    {{$t('service_type')}}
                                </th>
                                <th class="pr-3 py-2" width="1">
                                    {{$t('action')}}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <!-- @foreach($organizations as $organization)
                            <tr>
                                <td class="pl-3">{{$organization->identification_code }}</td>
                                <td class="pl-3">{{$organization->name_full }}</td>
                                <td class="pl-3">{{$organization->parent?$organization->parent->name_full:'-'}}</td>
                                <td class="pl-3">{{$organization->type->name ?? '' }}</td>
                                <td class="pl-3">{{$organization->level->name ?? '' }}</td>
                                <td class="pl-3 d-flex flex-wrap">
                                    @foreach ($organization->serviceTypes as $sType)
                                    <span class="m-1">{{$sType->name ?$sType->name.($loop->last?'':', ') :'' }}</span>
                                    @endforeach
                                </td>
                                <td class="pr-3">
                                    <div class="d-flex">
                                        @if(auth()->user()->hasPermissionTo('organizations_view'))
                                            <a class="btn btn-sm bg-success d-flex align-center"
                                               href="{{ route('organizations.show', $organization) }}">
                                                <i class="fas fa-eye"></i>
                                            </a>
                                        @endif
                                        @if(auth()->user()->hasPermissionTo('organizations_edit'))
                                            <a class="btn btn-sm bg-info ml-2 d-flex align-center"
                                               href="{{route('organizations.edit', $organization)}}">
                                                <i class="fas fa-pencil-alt"></i>
                                            </a>
                                        @endif
                                        @if(auth()->user()->hasPermissionTo('organizations_delete'))
                                        <a class="btn btn-sm bg-danger ml-2 d-flex align-center"
                                           href="javascript:void(0)" v-on:click="getOrganization({{$organization}})">
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
                    <!-- <div class="col-auto">{{$organizations->links()}}</div>
                    <div class="col-auto mb-2 py-1 text-primary font-weight-bold">{{$t('total')}}: {{ number_format($organizations->total(), 0, '.', ' ') }}</div> -->
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