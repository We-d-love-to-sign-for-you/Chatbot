<template>
  <div id="app">
    <Chatbot />
  </div>
</template>

<script>
import Chatbot from "./components/Chatbot.vue";
import { LIST_INTERPRETERS } from "./queries/interpreter";

export default {
  name: "App",
  components: {
    Chatbot
  },
  apollo: {
    listInterpreters: {
      // graphql query
      query: LIST_INTERPRETERS,
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
