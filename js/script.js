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
      const dateFormatted = this.getCurrentFormattedDate();
      const messageFormatted = {
        date : dateFormatted,
        message: this.newMessage,
        status: 'sent'
      };
      //Push nella chat
      this.pushMessage(messageFormatted)
      //Reset
      this.resetNewMessageInput();

      //timeout di risposta automatica
      setTimeout(()=> {
        const replyMessagge = {
          date: dateFormatted,
          message: 'ok',
          status: 'received'
        };
        this.pushMessage(replyMessagge);
      },1000)
    },
    getCurrentFormattedDate(){
      const dateCurrent = new Date();
      return `${dateCurrent.getDate()}/${dateCurrent.getMonth() + 1}/${dateCurrent.getFullYear()} ${dateCurrent.getHours()}:${dateCurrent.getMinutes()}:${dateCurrent.getSeconds()}`
    },
    pushMessage(message) {
      if(this.chatSel){
        this.chatSel.messages.push(message)
      }
    },
    resetNewMessageInput(){
      this.newMessage = '';
    },
  },
  computed:{
    serchedChat(){
      const charToSearch = this.chatWanted.toLowerCase();
      return this.contacts.filter(contact =>
         contact.name.toLowerCase().includes(charToSearch)
      );
    },
  },
  mounted(){
  }
  
}).mount('#app');