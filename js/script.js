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
      const dateFormatted = this.getFormatDate();
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
        const replyMessage = {
          date: dateFormatted,
          message: 'ok',
          status: 'received'
        };
        this.pushMessage(replyMessage);
      },1000)
    },
    /* PUSH MESSAGE */
    pushMessage(message) {
      if(this.chatSel){
        this.chatSel.messages.push(message)
      }
    },
    /* LAST MESSAGE RECIVED */
    getLastMessage(chat){
      return chat.messages.at(-1).message;
    },
    /* LAST MESSAGE DATE  RECIVED */
    getLastDate(chat){
      return chat.messages.at(-1).date;
    },

    getFormatDate(){
      this.contacts.date
    },

    /* RESET */
    resetNewMessageInput(){
      this.newMessage = '';
    },
  },
  computed:{
    /* FILTER CHAT w CHAR INPUT */
    serchedChat(){
      const charToSearch = this.chatWanted.toLowerCase();
      return this.contacts.filter(contact =>
         contact.name.toLowerCase().includes(charToSearch)
      );
    },
  },
  mounted(){  }
  
}).mount('#app');