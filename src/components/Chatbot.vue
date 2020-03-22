<template>
  <div id="chatbot">
    <ChatbotHead id="chatbotHead" @headClicked="onHeadClick" />
    <transition name="fade">
      <Dialog id="chatbotDialog" v-show="!isHidden" />
    </transition>
  </div>
</template>

<script>
import ChatbotHead from "./ChatbotHead";
import Dialog from "./Dialog";

export default {
  name: "Chatbot",

  components: {
    ChatbotHead,
    Dialog
  },
  data: function() {
    return {
      isHidden: true
    };
  },
  methods: {
    onHeadClick: function() {
      this.isHidden = !this.isHidden;
      this.changePosition();
    },
    changePosition: function() {
        let chatbot = document.getElementById("chatbot");
        if(!this.isHidden){
            chatbot.style.top = "52%";
        } else {
            chatbot.style.top = "95%";
        }
    }
  }
};
</script>

<style scoped>
  #chatbot {
    position: fixed;
    left: 80%;
    width: 20%;
    top: 95%;
    height: 500px;
    transition: top 0.5s;
  }


  #chatbotHead {
    width: 100%;
    height: 10%;
    background-color: #4d7ced;
  }

  #chatbotDialog {
    height: 400px;
    background-color: lightgray;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
