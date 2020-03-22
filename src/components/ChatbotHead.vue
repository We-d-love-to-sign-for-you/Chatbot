<template>
  <button @click="onHeadClick">
    WE'D LOVE TO SIGN FOR YOU
  </button>
</template>

<script>
export default {
  name: "ChatbotHead",
  data: function() {

  },
  methods: {
      onHeadClick: function(){
          this.$emit("headClicked")
      }
  }
};
</script>

<style scoped>
  button {
    padding-top: 5px;
    font-size: large;
  }
</style>
