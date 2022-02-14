<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light justify-content-between flex-wrap">
    <div class="col-md-auto pr-0">
        <div class="d-flex">
            <div class="col-auto pl-0">
                <button class="btn btn-light hamburger ml-n3 ml-lg-n4" data-widget="pushmenu">
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19V1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V19ZM4 10L4.004 9.918L4.02024 9.79927V9.79927L4.04974 9.68786V9.68786L4.09367 9.57678L4.146 9.47929V9.47929L4.19631 9.40484V9.40484L4.29289 9.29289L8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289C10.0676 5.65338 10.0953 6.22061 9.7903 6.6129L9.70711 6.70711L7.415 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H7.415L9.70711 13.2929C10.0676 13.6534 10.0953 14.2206 9.7903 14.6129L9.70711 14.7071C9.34662 15.0676 8.77939 15.0953 8.3871 14.7903L8.29289 14.7071L4.29289 10.7071L4.2515 10.6631V10.6631L4.19633 10.5953V10.5953L4.12467 10.4841L4.09365 10.4231V10.4231L4.05989 10.3417V10.3417L4.03584 10.266V10.266L4.00683 10.1175V10.1175L4 10Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            <div class="col-sm-3 ml-n3 ml-sm-0 pr-5 pr-sm-0 align-self-center offset-md-4 offset-xl-0">
                <div class="fz-24px font-weight-bold">hrm.ssv.uz</div>
                <h6 class="h6 m-0 text-danger font-weight-bold">
                        <!-- {{auth()->user()->employee?(auth()->user()->employee->official_full_name.' - '.auth()->user()->employee->employeeWorkplaces->first()->organizationStructure->position->name):''}} -->
                </h6>
            </div>
        </div>
    </div>


    <div style="flex-grow: 1;" class="for-offset-header-search"></div>

    <div class="col-sm-0 py-2 text-center">
        <div class="text-bold">
            <a target="_blank" href="https://t.me/joinchat/N7k6yfgU4fNiMzFi" class="text-nowrap text-decoration-none">
            <!-- {{__('app.qa')}} -->
            </a>
        </div>
    </div>



    <div style="flex-grow: 1;" class="for-offset-header-search"></div>
    
    <div class="col-sm-6 col-md-6 py-2 text-center">
        <div class="text-bold">


        <!-- <div class="main__box">
            <input type="checkbox" id="check">
            <div class="main__box_search">
                <div class="search_and_select">
                    <input type="text" placeholder="Искать">
                    <select name="" id="">
                        <option value="fast">Быстрый поиск</option>
                        <option value="extended">Расширенный поиск</option>
                    </select>
                </div>
                <label for="check" class="icon">
                    <i class="fas fa-search"></i>
                </label>
            </div>
        </div> -->


        <div class="search__nav">
            <input type="text" placeholder="Искать">
            <img src="../../assets/icons/Search.svg" alt="">
        </div>


        <!-- <div class="notification__nav">
            <img src="{{asset('icons/Notification.svg')}}" alt="">
        </div> -->
        

            <!-- <div class="header-all-block" id="header-search-all-block-filter">

                <div class="d-flex align-center header-search__text" onclick="showSearchInput()">
                    <div class="search-icon-block-employees-result" id="header-search-icon-filter-page">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon-block-employees-result__icon">
                            <circle cx="10.7666" cy="10.7666" r="8.98856" stroke="#223555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.0183 17.4851L20.5423 21" stroke="#223555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
{{--                            <img src="./img/Search.png" alt="" id="header-search-icon-filter-page">--}}
                </div>

                <div class="header-input-search" id="header_search">
                    <input type="text" placeholder="Быстрый поиск">
                    <div class="header-input-search__append-text">Расширенный поиск</div>
                </div>

                <div id="header-search-close-icon-filter-page" class="header-search-close-icon">
                    <svg onclick="closeSearchInput()"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6665 18.0001L5.99983 7.33338C5.63539 6.96894 5.63539 6.36449 5.99983 6.00004C6.36428 5.6356 6.96873 5.6356 7.33317 6.00004L17.9999 16.6667C18.3643 17.0312 18.3643 17.6356 17.9999 18.0001C17.6354 18.3645 17.031 18.3645 16.6665 18.0001Z" fill="#223555"/>
                        <path d="M6.00012 18.0001C5.63568 17.6356 5.63568 17.0312 6.00012 16.6667L16.6668 6.00004C17.0313 5.6356 17.6357 5.6356 18.0002 6.00004C18.3646 6.36449 18.3646 6.96894 18.0002 7.33338L7.33346 18.0001C6.96902 18.3645 6.36457 18.3645 6.00012 18.0001Z" fill="#223555"/>
                    </svg>
                </div>

{{--                        <img--}}
{{--                                src="./img/add.png"--}}
{{--                                alt=""--}}
{{--                                class="header-search-close-icon"--}}
{{--                                id="header-search-close-icon-filter-page"--}}
{{--                                onclick="closeSearchInput()"--}}
{{--                        >--}}
            </div> -->
        </div>
    </div>


    <div class="col-sm-auto d-flex">
        <div class="dropdown">
            <button id="navbarLanguage" type="button" class="btn btn_no_outline text-primary d-flex align-center" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <!-- <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM12.9724 11.0008H7.02756C7.1385 13.0043 7.57914 14.8283 8.25332 16.1766C8.88121 17.4324 9.55216 18 10 18C10.4478 18 11.1188 17.4324 11.7467 16.1766C12.4209 14.8283 12.8615 13.0043 12.9724 11.0008ZM17.938 11.001L14.9753 11.0013C14.8543 13.4352 14.2969 15.6123 13.462 17.2152C15.8601 16.0616 17.5952 13.7475 17.938 11.001ZM5.02475 11.0013L2.06202 11.001C2.40485 13.7475 4.13992 16.0615 6.53864 17.2145C5.75535 15.7123 5.2165 13.705 5.05251 11.4545L5.02475 11.0013ZM6.53804 2.78476L6.51189 2.79845C4.12679 3.95583 2.40323 6.26319 2.06192 8.99983L5.0247 8.99975C5.14558 6.56543 5.70294 4.38794 6.53804 2.78476ZM10 2L9.91871 2.00592C9.47338 2.06916 8.84428 2.64145 8.25332 3.82336C7.57902 5.17195 7.13835 6.99633 7.0275 9.00022H12.9725C12.8617 6.99633 12.421 5.17195 11.7467 3.82336C11.1188 2.56758 10.4478 2 10 2ZM13.4614 2.78553L13.4839 2.82724C14.3069 4.42646 14.8556 6.58728 14.9753 9.00044L17.9381 9.00001C17.5956 6.25307 15.8604 3.93862 13.4614 2.78553Z" fill="currentColor"/>
                </svg> -->

                <!-- @php
                    $lang = session()->get('locale', 'ru')
                @endphp
                @switch($lang)
                    @case('ru') Русский @break
                    @case('uz-cyrl') Ўзбек @break
                    @case('uz') O'zbek @break
                    @case('en') English @break
                @endswitch -->


                <svg class="ml-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" 
                    stroke="#1464C0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <!-- <div class="dropdown-menu dropdown-menu-center" aria-labelledby="navbarLanguage">
                <a class="dropdown-item text-center" href="{{ route('language.change', ['locale' => 'ru']) }}">
                    Русский
                </a>
                <a class="dropdown-item text-center" href="{{ route('language.change', ['locale' => 'uz-cyrl']) }}">
                    Ўзбек
                </a>
                <a class="dropdown-item text-center" href="{{ route('language.change', ['locale' => 'uz']) }}">
                    O'zbek
                </a>
                {{-- <a class="dropdown-item text-center" href="{{ route('language.change', ['locale' => 'en']) }}">
                    English
                </a> --}}
            </div> -->
        </div>

        <!-- @auth
            <div class="dropdown">
                <button class="btn text-primary px-0 py-0 ml-2" type="button" id="navbarProfile"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="far fa-user-circle" style="font-size: 2em; vertical-align: text-top;"></i>
                    {{ auth()->user()->username }}
                </button>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarProfile">
                    <a href="{{ config('services.sso_uri').'/profile' }}" target="_blank" class="dropdown-item text-center">
                        {{ __('Profile') }}
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST">
                        @csrf
                        <button class="dropdown-item text-center" type="submit">
                            {{ __('Logout') }}
                        </button>
                    </form>
                </div>
            </div>
        @endauth -->
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>