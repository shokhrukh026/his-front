<template>
<div class="sidebar" :class="sidebarCollapse ? '' : 'close__bar'">
    <div class="logo-details">
      <img src="../../assets/img/logo.png" alt="Министерство здравоохранения Республики Узбекистан">
      <span class="logo_name">Министерство<br />здравоохранения<br />Республики Узбекистан</span>
    </div>

    <ul class="nav-links" :class="!sidebarCollapse ? '' : 'pr-3'">

       <!-- @if(auth()->user()) -->
        <li class="nav-item">
            <router-link to="/home" tag="a" class="nav-link" :class="sidebarCollapse ? '' : 'border-radius-none'">
                <span class="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z" :fill="$router.currentRoute.value.path == '/home' ? '#fff' : '#1464C0'"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" :fill="$router.currentRoute.value.path == '/home' ? '#fff' : '#1464C0'"/>
                    </svg>
                </span>
                <span class="link_name">{{$t('generalInfo')}}</span>
                <!-- <p>{{ __('app.generalInfo') }}</p> -->
            </router-link>
        </li>
        <!-- @if(Auth::user()->hasPermissionTo('organizations_index')) -->
        <li class="nav-item">
            <router-link to="/organizations" tag="a" class="nav-link" :class="sidebarCollapse ? '' : 'border-radius-none'">
                <span class="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z" :fill="$router.currentRoute.value.path == '/organizations' ? '#fff' : '#1464C0'"/>
                        <ellipse opacity="0.4" cx="12" cy="21" rx="5" ry="1" :fill="$router.currentRoute.value.path == '/organizations' ? '#fff' : '#1464C0'"/>
                    </svg>
                </span>
                <span class="link_name">{{$t('organizations')}}</span>
                <!-- <p>{{ __('app.organizations') }}</p> -->
            </router-link>
        </li>
        
    <!-- @endif -->
    <!-- @if(Auth::user()->hasPermissionTo('employees_index')) -->
        <li class="nav-item">
            <router-link to="/employees" tag="a" class="nav-link" :class="sidebarCollapse ? '' : 'border-radius-none'">
                <span class="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9491 14.5399C8.49909 14.5399 5.58813 15.1037 5.58813 17.2794C5.58813 19.4561 8.51789 20 11.9491 20C15.3991 20 18.31 19.4362 18.31 17.2605C18.31 15.0839 15.3803 14.5399 11.9491 14.5399Z" :fill="$router.currentRoute.value.path == '/employees' ? '#fff' : '#1464C0'" />
                        <path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" :fill="$router.currentRoute.value.path == '/employees' ? '#fff' : '#1464C0'"/>
                        <path opacity="0.4" d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z" :fill="$router.currentRoute.value.path == '/employees' ? '#fff' : '#1464C0'"/>
                        <path d="M22.8092 14.817C22.5083 14.1722 21.7821 13.73 20.6781 13.513C20.157 13.3851 18.7467 13.205 17.435 13.2293C17.4153 13.232 17.4045 13.2455 17.4027 13.2545C17.4 13.2671 17.4054 13.2887 17.4314 13.3022C18.0376 13.6039 20.3808 14.916 20.0862 17.6834C20.0737 17.8032 20.1695 17.9068 20.2886 17.8888C20.8652 17.8059 22.3489 17.4853 22.8092 16.4866C23.0635 15.9589 23.0635 15.3456 22.8092 14.817Z" :fill="$router.currentRoute.value.path == '/employees' ? '#fff' : '#1464C0'"/>
                        <path opacity="0.4" d="M7.04483 4.77973C6.8165 4.7329 6.58101 4.70679 6.33567 4.70679C4.07926 4.70679 2.30726 6.84201 2.91255 9.21947C3.31906 10.8216 4.79379 11.8851 6.43685 11.8419C6.60161 11.8374 6.76368 11.8221 6.92037 11.7951C7.03409 11.7753 7.09139 11.6465 7.02692 11.551C6.40014 10.6234 6.04288 9.50765 6.04288 8.30991C6.04288 7.05904 6.43327 5.89462 7.11109 4.93913C7.13258 4.90941 7.1487 4.86348 7.12721 4.82926C7.1093 4.80135 7.07617 4.78694 7.04483 4.77973Z" :fill="$router.currentRoute.value.path == '/employees' ? '#fff' : '#1464C0'"/>
                        <path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" :fill="$router.currentRoute.value.path == '/employees' ? '#fff' : '#1464C0'"/>
                    </svg>
                </span>
                <span class="link_name">{{$t('users')}}</span>
                <!-- <p>{{ __('app.users') }}</p> -->
            </router-link>
        </li>
    <!-- @endif -->
    <!-- @if(Auth::user()->hasRole('super_admin')) -->
        <li class="nav-item">
            <router-link to="/roles" tag="a" class="nav-link" :class="sidebarCollapse ? '' : 'border-radius-none'">
                <!-- <i class="nav-icon fas fa-user-lock"></i> -->
                <span class="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z" :fill="$router.currentRoute.value.path == '/roles' ? '#fff' : '#1464C0'"/>
                        <path d="M9.5 15.0155C5.45422 15.0155 2 15.6623 2 18.2466C2 20.8299 5.4332 21.5 9.5 21.5C13.5448 21.5 17 20.8532 17 18.2689C17 15.6846 13.5668 15.0155 9.5 15.0155Z" :fill="$router.currentRoute.value.path == '/roles' ? '#fff' : '#1464C0'"/>
                        <path opacity="0.4" d="M9.49999 12.5542C12.2546 12.5542 14.4626 10.3177 14.4626 7.52761C14.4626 4.73754 12.2546 2.5 9.49999 2.5C6.74541 2.5 4.53735 4.73754 4.53735 7.52761C4.53735 10.3177 6.74541 12.5542 9.49999 12.5542Z" :fill="$router.currentRoute.value.path == '/roles' ? '#fff' : '#1464C0'"/>
                    </svg>
                </span>
                <span class="link_name">{{$t('roles')}}</span>
                <!-- <p>{{ __('app.roles') }}</p> -->
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/permissions" tag="a" class="nav-link" :class="sidebarCollapse ? '' : 'border-radius-none'">
                <span class="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.3345 1.99976H7.66549C4.27649 1.99976 2.00049 4.37776 2.00049 7.91676V16.0838C2.00049 19.6218 4.27649 21.9998 7.66549 21.9998H16.3335C19.7225 21.9998 22.0005 19.6218 22.0005 16.0838V7.91676C22.0005 4.37776 19.7235 1.99976 16.3345 1.99976Z" :fill="$router.currentRoute.value.path == '/permissions' ? '#fff' : '#1464C0'"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3144 11.2484H17.0144C17.4244 11.2484 17.7644 11.5884 17.7644 11.9984V13.8484C17.7644 14.2684 17.4244 14.5984 17.0144 14.5984C16.5944 14.5984 16.2644 14.2684 16.2644 13.8484V12.7484H14.9344V13.8484C14.9344 14.2684 14.5944 14.5984 14.1844 14.5984C13.7644 14.5984 13.4344 14.2684 13.4344 13.8484V12.7484H11.3144C10.9944 13.8184 10.0144 14.5984 8.84437 14.5984C7.40437 14.5984 6.23438 13.4384 6.23438 11.9984C6.23438 10.5684 7.40437 9.39844 8.84437 9.39844C10.0144 9.39844 10.9944 10.1784 11.3144 11.2484ZM7.73438 11.9984C7.73438 12.6084 8.23438 13.0984 8.84438 13.0984C9.44438 13.0984 9.94438 12.6084 9.94438 11.9984C9.94438 11.3884 9.44438 10.8984 8.84438 10.8984C8.23438 10.8984 7.73438 11.3884 7.73438 11.9984Z" :fill="$router.currentRoute.value.path == '/permissions' ? '#fff' : '#1464C0'"/>
                    </svg>
                </span>
                <span class="link_name">{{$t('permissions')}}</span>
                <!-- <p>{{ __('app.permissions') }}</p> -->
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/translations" tag="a" class="nav-link" :class="sidebarCollapse ? '' : 'border-radius-none'">
                <span class="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M6.70555 12.8905C6.18944 12.8905 5.77163 13.3145 5.77163 13.8383L5.51416 18.417C5.51416 19.0846 6.04783 19.625 6.70555 19.625C7.36328 19.625 7.89577 19.0846 7.89577 18.417L7.63947 13.8383C7.63947 13.3145 7.22167 12.8905 6.70555 12.8905Z" :fill="$router.currentRoute.value.path == '/translations' ? '#fff' : '#1464C0'"/>
                        <path d="M7.98037 3.67345C7.98037 3.67345 7.71236 3.39789 7.54618 3.27793C7.30509 3.09264 7.00783 3 6.71173 3C6.37936 3 6.07039 3.10452 5.81877 3.30169C5.77313 3.34801 5.57886 3.5226 5.41852 3.68532C4.41204 4.6367 2.76539 7.12026 2.26215 8.42083C2.18257 8.618 2.01053 9.11685 2 9.38409C2 9.63827 2.05618 9.88294 2.17087 10.1145C2.3312 10.4044 2.58282 10.6372 2.88009 10.7642C3.08606 10.8462 3.70282 10.9733 3.71453 10.9733C4.38981 11.1016 5.48757 11.1704 6.70003 11.1704C7.85514 11.1704 8.90727 11.1016 9.59308 10.997C9.60478 10.9852 10.3702 10.8581 10.6335 10.7179C11.1133 10.4626 11.4118 9.96371 11.4118 9.43041V9.38409C11.4001 9.03608 11.1016 8.30444 11.0911 8.30444C10.5879 7.07394 9.02079 4.64858 7.98037 3.67345Z" :fill="$router.currentRoute.value.path == '/translations' ? '#fff' : '#1464C0'"/>
                        <path opacity="0.4" d="M17.2947 11.1096C17.8108 11.1096 18.2286 10.6856 18.2286 10.1618L18.4849 5.58296C18.4849 4.91543 17.9524 4.375 17.2947 4.375C16.6369 4.375 16.1033 4.91543 16.1033 5.58296L16.3607 10.1618C16.3607 10.6856 16.7785 11.1096 17.2947 11.1096Z" :fill="$router.currentRoute.value.path == '/translations' ? '#fff' : '#1464C0'"/>
                        <path d="M21.829 13.8853C21.6687 13.5955 21.4171 13.3638 21.1198 13.2356C20.9138 13.1536 20.2959 13.0265 20.2854 13.0265C19.6101 12.8982 18.5123 12.8293 17.2999 12.8293C16.1448 12.8293 15.0926 12.8982 14.4068 13.0028C14.3951 13.0146 13.6297 13.1429 13.3664 13.2819C12.8854 13.5373 12.5881 14.0361 12.5881 14.5706V14.6169C12.5998 14.9649 12.8971 15.6954 12.9088 15.6954C13.412 16.9259 14.9779 19.3525 16.0195 20.3265C16.0195 20.3265 16.2875 20.6021 16.4537 20.7208C16.6936 20.9073 16.9909 21 17.2893 21C17.6205 21 17.9283 20.8954 18.1811 20.6983C18.2268 20.652 18.421 20.4774 18.5814 20.3158C19.5867 19.3632 21.2345 16.8796 21.7366 15.5802C21.8173 15.383 21.9894 14.883 21.9999 14.6169C21.9999 14.3616 21.9437 14.1169 21.829 13.8853Z" :fill="$router.currentRoute.value.path == '/translations' ? '#fff' : '#1464C0'"/>
                    </svg>
                </span>
                <span class="link_name">{{$t('translations')}}</span>
                <!-- <p>{{ __('app.translations') }}</p> -->
            </router-link>
        </li>

     
      <!-- <li>
        <div class="profile-details">
          <div class="profile-content">
            <img src="image/profile.jpg" alt="profileImg">
          </div>
          <div class="name-job">
            <div class="profile_name">Prem Shahi</div>
            <div class="job">Web Desginer</div>
          </div>
          <i class='bx bx-log-out' ></i>
        </div>
      </li> -->

      <li class="d-flex justify-content-center">
          <div class="d-flex align-center" style="position:fixed; bottom: 15px; transition: all 0.3s ease-in-out;">
              <img class="mr-1" src="../../assets/img/logo-left.svg" width="40" alt="Logo of IT-MED">
              <img :class="sidebarCollapse ? '' : 'logo-footer'" src="../../assets/img/logo-right.svg" width="100" alt="Logo of IT-MED">
          </div>
      </li>

    </ul>
</div>


  
</template>

<script>
import { ref, onMounted } from 'vue'
// import { useI18n } from "vue-i18n";
import { useStore } from '../../stores/main'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore()
    const { sidebarCollapse } = storeToRefs(store)


    return {
      // you can return the whole store instance to use it in the template
      store,
      sidebarCollapse
    }
  },
  mounted(){
      // let arrow = document.querySelectorAll(".arrow");
      // for (var i = 0; i < arrow.length; i++) {
      //     arrow[i].addEventListener("click", (e)=>{
          //     let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
          //     arrowParent.classList.toggle("showMenu");
          // });
      // }
      // let sidebar = document.querySelector(".sidebar");
      // let sidebarBtn = document.querySelector(".bx-menu");
      // console.log(sidebarBtn);
      // sidebarBtn.addEventListener("click", ()=>{
      // sidebar.classList.toggle("close__bar");
      // });
  }

}
</script>

<style>

</style>