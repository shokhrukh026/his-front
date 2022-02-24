import axios from 'axios';
import { defineStore } from 'pinia';
import { BASE_URL } from '../../variables';
import router from '../router/index';

export const authStore = defineStore('auth', {
  state: () => {
    return {
      sidebarCollapse: false,
      user: [],
    }
  },
  actions: {
    async SIGN_IN(payload){
      await axios({
        method: "POST",
        url: BASE_URL + 'auth/login',
        data: payload
      })
      .then((e) => {
        this.user = e.data
        sessionStorage.setItem('user', JSON.stringify(e.data));
        router.push({path: '/home'});
        return e.data;
      })
      .catch((error) => {
        return error;
      })
    }









  },
  getters: {

  }
}) 