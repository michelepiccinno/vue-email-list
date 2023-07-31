'use strict';
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      arrayEmails: [],
    };
  },
  methods: {
    getEmailsFromApi() {

    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(
        "https://flynn.boolean.careers/exercises/api/random/mail"
      ).then((axiosResp) => {
        this.arrayEmails.push(axiosResp.data.response);
        console.log(axiosResp.data.response);
      });
    }
  },
}).mount('#app');