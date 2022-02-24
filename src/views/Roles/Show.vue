<template>
<div class="d-flex justify-space-between mb-3">
   <div class="d-flex">
        <!-- <h1 class="text-dark fz-18rem">{{$t('roles')}}</h1> -->
        <!-- @if(Auth::user()->hasPermissionTo('organizations_create')) -->
        <a href="{{route('organizations.create')}}" class="btn btn-primary text-nowrap">
            <i class="fas fa-angle-double-left mr-2 fz-12px"></i> {{$t('back')}}
        </a>
        <!-- @endif -->
   </div>
</div>
<div class="card" id="by-type-region">
    <div class="card-body" id="by-type">

        <!-- <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#organization__main_data">{{$t('main_data')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#organization__address">{{$t('the_address')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#organization__contacts">{{$t('contact_points')}}</a>
            </li>
        </ul> -->

        <div class="tab-content">
            <!-- <div class="tab-pane fade in active show" id="organization__main_data"> -->
                <div class="">
                    <div>
                        <h4>{{$t('main_data')}}</h4>
                    </div>

                    <div class="user__info_right_table mt-3">
                        <table class="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th class="w-50">{{$t('ID')}}</th>
                                    <!-- <td>{{ $organization->tin }}</td> -->
                                </tr>
                                <tr>
                                    <th class="w-50">{{$t('name')}}</th>
                                    <!-- <td>{{ $organization->parent->name_full ?? '' }}</td> -->
                                </tr>   
                                <tr>
                                    <th class="w-50">{{$t('description')}}</th>
                                    <!-- <td>{{ $organization->type->name ?? '' }}</td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class=" mt-3">
                    <div>
                        <h4>{{$t('permissions')}}</h4>
                    </div>

                    <div class="user__info_right_table mt-3">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <th>{{$t('ID')}}</th>
                                <th>{{$t('name')}}</th>
                            </thead>
                            <tbody>
                                <td>sdas</td>
                                <td>asdasdasd</td>
                                <!-- <tr>
                                    <th>{{$t('ID')}}</th>
                                </tr>
                                <tr>
                                    <th>{{$t('name')}}</th>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
                </div>
            <!-- </div> -->
           
          

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