<template>
<div class="d-flex justify-space-between mb-3">
    <h1 class="text-dark fz-18rem">{{$t('permissions')}}</h1>
    <!-- @if(Auth::user()->hasPermissionTo('permissions_create')) -->
        <div class="btn btn-primary text-nowrap d-flex align-center" @click="openPermissionAddModal()">
            <i class="fas fa-plus mr-2 fz-12px"></i> {{$t('add_right')}}
        </div>
    <!-- @endif -->
</div>
<div class="row">
    <div class="col-12">
        <form action="?">
            <div class="form-row align-items-center">
                <div class="col-sm">
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
                <div class="col-sm-auto align-self-lg-center">
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary mt-sm-4 w-100" name="filter">
                            <i class="fas fa-filter mr-2 fz-12px"></i> {{$t('filter')}}
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <div class="card">
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr role="row">
                        <th class="py-2 pl-3">
                            ID
                        </th>
                        <th class="py-2">
                            {{$t('name')}}
                        </th>
                        <th class="py-2">
                            {{$t('date_of_creation')}}
                        </th>
                        <th class="py-2 pr-3" width="1">
                            {{$t('action')}}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- @foreach($permissions as $permission)
                        <tr>
                            <td class="pl-3">{{$permission->id}}</td>
                            <td>{{$permission->name}}</td>
                            <td>{{$permission->created_at->format('d.m.Y')}}</td>
                            <td class="pr-3">
                                <div class="d-flex">
                                    @if(Auth::user()->hasPermissionTo('permissions_view'))
                                        <a class="btn btn-sm btn-success d-flex align-center"
                                            href="{{route('permissions.show', $permission)}}">
                                            <i class="fas fa-eye text-white"></i>
                                        </a>
                                    @endif
                                    @if(Auth::user()->hasPermissionTo('permissions_edit'))
                                        <a class="btn btn-sm bg-info ml-2 d-flex align-center"
                                            href="{{route('permissions.edit', $permission)}}">
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
                <!-- {{$permissions->links()}} -->
            </div>
        </div>
    </div>

    <DialogAddPermission></DialogAddPermission>
</div>
</template>

<script>
import DialogAddPermission from './DialogAddPermission.vue';
export default {
    components: {
        DialogAddPermission
    },
    setup(){
        function openPermissionAddModal(){
            $('#addPermissionModal').modal('toggle');
        }

        return{
            openPermissionAddModal
        }
    }

}
</script>

<style>

</style>