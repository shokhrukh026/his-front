<template>
<div class="row mb-3">
        <h1 class="text-dark ml-2 mr-4 px-1 fz-18rem">{{$t('userRoles.role')}}</h1>
        <!-- @if(Auth::user()->hasPermissionTo('roles_create')) -->
            <a href="{{route('roles.create')}}" class="btn btn-primary text-nowrap d-flex align-center">
                <i class="fas fa-plus mr-2 fz-12px"></i> {{$t('add_role')}}
            </a>
        <!-- @endif -->
</div>
<div class="row">
    <div class="col-12">
        <form action="?">
            <div class="form-row align-items-center">
                <div class="col-sm-2">
                    <div class="form-group">
                        <label for="id" class="ml-1">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                            data-inputmask-regex="\d*"
                                placeholder="ID" value="{{request('id')}}">
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-group">
                        <label for="name" class="ml-1">{{$t('name')}}</label>
                        <input type="text" class="form-control" id="name" name="name"
                                :placeholder="$t('name')" value="{{request('name')}}">
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-group">
                        <label for="description" class="ml-1">{{$t('description')}}</label>
                        <input type="text" class="form-control" id="description" name="description"
                                :placeholder="$t('description')" value="{{request('description')}}">
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-group">
                        <label for="created_at" class="ml-1">{{$t('date_of_creation')}}</label>
                        <input type="tel" class="form-control datetimepicker-input" id="created_at"
                            name="created_at" placeholder="дд.мм.гггг"
                            data-inputmask="'mask': '99.99.9999'"
                            data-inputmask-autoUnmask="false"
                            data-inputmask-removeMaskOnSubmit="false"
                            value="{{request('created_at') ? date('Y-m-d', strtotime(request('created_at'))) : ''}}"
                            autocomplete="off"
                        />
                    </div>
                </div>
                <div class="col-md-auto align-self-lg-center">
                    <button type="submit" class="btn btn-primary mt-md-2 mb-3 mb-md-0 w-100" name="filter">
                        <i class="fas fa-filter mr-2 fz-12px"></i> {{$t('filter')}}
                    </button>
                </div>
            </div>
        </form>
        <div class="card">
            <div class="table-responsive">
                <table class="table table-striped table-sm mb-0">
                    <thead>
                    <tr role="row">
                        <th class="py-2 pl-3">
                            ID
                        </th>
                        <th class="py-2">
                            {{$t('name')}}
                        </th>
                        <th class="py-2">
                            {{$t('description')}}
                        </th>
                        <th class="py-2">
                            {{$t('date_of_creation')}}
                        </th>
                        <th class="py-2" width="1">
                            {{$t('action')}}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- @foreach($roles as $role)
                        <tr>
                            <td class="pl-3">{{$role->id}}</td>
                            <td>{{$role->name}}</td>
                            <td>{{$role->description}}</td>
                            <td>{{$role->created_at->format('d.m.Y')}}</td>
                            <td class="pr-3">
                                <div class="d-flex">
                                    @if(Auth::user()->hasPermissionTo('roles_view'))
                                        <a class="btn btn-sm btn-success d-flex align-center"
                                            href="{{route('roles.show', $role)}}">
                                            <i class="fas fa-eye text-white"></i>
                                        </a>
                                    @endif
                                    @if(Auth::user()->hasPermissionTo('roles_edit'))
                                        <a class="btn btn-sm bg-info ml-2 d-flex align-center"
                                            href="{{route('roles.edit', $role)}}">
                                            <i class="fas fa-pencil-alt"></i>
                                        </a>
                                    @endif

                                </div>
                            </td>
                        </tr>
                    @endforeach -->
                    </tbody>
                </table>
            </div>
            <div class="pagination-wrapper align-items-center justify-content-between mx-0 pt-2 px-2">
                <!-- {{$roles->links()}} -->
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

</style>