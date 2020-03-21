<template>
  <div id="chatbot">
    <ChatbotHead />
    <Dialog />
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
  }
};
</script>

<style scoped></style>
