import { contacts } from '../js/contacts.js'

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      chatSel: null,
      newMessage: '',
      chatWanted: ''
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
      //timeout di risposta automatica
      setTimeout(()=> {
        const replyMessagge = {
          date: dateFormatted,
          message: 'ok',
          status: 'received'
        };
        this.chatSel.messages.push(replyMessagge);
      },1000)
    },
  },
  computed:{
    serchedChat(){
      const charToSearch = this.chatWanted.toLowerCase();
      return this.contacts.filter(contact => contact.name.toLowerCase().includes(charToSearch))
    }

  },
  mounted(){
  }
  
}).mount('#app');