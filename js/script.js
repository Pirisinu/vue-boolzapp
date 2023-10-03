import { contacts } from '../js/contacts.js'

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      chatSel: null,
      newMessage: ''
    }
  },
  methods:{
    //Gestione del messaggio utente
    messageSend(){
      const dateCurrent = new Date();
      const dateFormatted = `
          ${dateCurrent.getDate()}/${dateCurrent.getMonth() + 1}/${dateCurrent.getFullYear()} ${dateCurrent.getHours()}:${dateCurrent.getMinutes()}:${dateCurrent.getSeconds()}`
      const messageFormatted = {
        date : dateFormatted,
        message: this.newMessage,
        status: 'sent'
      };
      //Push nella chat
      this.chatSel.messages.push(messageFormatted);
      //Reset
      this.newMessage = '';

      setTimeout(()=> {
        const replyMessagge = {
          date: dateFormatted,
          message: 'ok',
          status: 'received'
        };
        this.chatSel.messages.push(replyMessagge);
      },1000)
    }
  },
  mounted(){
  }
  
}).mount('#app');