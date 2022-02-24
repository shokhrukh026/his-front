import { defineStore, storeToRefs } from 'pinia'
import { authStore } from './auth'
import { BASE_URL } from '../../variables';
import axios from 'axios';

export const mainStore = defineStore('main', {
  state: () => {
    let authStorage = storeToRefs(authStore());
    console.log(authStorage.user)
    return {
      user: authStorage.user,
      sidebarCollapse: false,
      organizations: [],
    }
  },
  actions: {
    async GET_ORGGANIZATIONS(){
      await axios({
        method: "GET",
        url: BASE_URL + 'organization',
        headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
      })
      .then((e) => {
        this.organizations = e.data
        // router.push({path: '/home'});
        return e.data;
      })
      .catch((error) => {
        return error;
      })
    },

    async GET_EMPLOYEES(){
      await axios({
        method: "GET",
        url: BASE_URL + 'employee',
        headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
      })
      .then((e) => {
        // this.user = e.data
        // router.push({path: '/home'});
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