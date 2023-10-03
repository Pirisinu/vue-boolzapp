import { contacts } from '../js/contacts.js'

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      chatSel: null
    }
  },
  methods:{

  },
  mounted(){
    console.log('Ciao da Vue');
  }
  
}).mount('#app');